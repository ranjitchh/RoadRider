const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../db/config.js");

router.post("/reg", async (req, res) => {
  try {
    const owner_email = req.body.owner_email;
    // Check if owner exists
    const checkQuery = `SELECT * FROM public.owners WHERE owner_email=$1`;
    const checkResult = await db.query(checkQuery, [owner_email]);
    if (checkResult.rows.length > 0) {
      return res.status(409).json({ error: "owner already exists." });
    }

    // Create new owner account
    const owner_password = req.body.owner_password;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(owner_password, salt);
    const values = [
      req.body.owner_name,
      owner_email,
      req.body.owner_number,
      hashedPassword,
    ];
    console.log(values);
    const query = `INSERT INTO public.owners (owner_name, owner_email,owner_number, owner_password)
    VALUES ($1, $2, $3, $4)`;
    await db.query(query, values);
    res.status(200).json({ message: "owner registered successfully." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the owner." });
  }
});

router.post("/categories", async (req, res) => {
  try {
    const values = [
      req.body.category_id,
      req.body.category_type,
      req.body.category_model,
      req.body.pricing_hr,
    ];
    console.log(values);
    const query = `INSERT INTO public.categories (category_id,category_type,category_model,pricing_hr)
    VALUES ($1, $2, $3,$4)`;
    await db.query(query, values);
    res.status(200).json({ message: "category registered successfully." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the category." });
  }
});

router.post("/login", async (req, res) => {
  const owner_email = req.body.email;
  const owner_password = req.body.password;

  try {
    const query = `
        SELECT owner_password, owner_id
        FROM public.owners
        WHERE owner_email = $1
      `;

    const result = await db.query(query, [owner_email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid owner credentials" });
    }

    const storedPassword = result.rows[0].owner_password;
    const isMatch = await bcrypt.compare(owner_password, storedPassword);

    if (isMatch) {
      const ID = result.rows[0].owner_id;
      res
        .status(200)
        .json({ message: "owner authentication successful", id: ID });
    } else {
      res.status(401).json({ error: "Invalid owner credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during login" });
  }
});

module.exports = router;
