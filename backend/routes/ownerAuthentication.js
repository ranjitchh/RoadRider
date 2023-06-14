const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../db/config.js");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/reg", upload.single("file"), async (req, res) => {
  try {
    const owner_password = req.body.owner_password;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(owner_password, salt);
    const values = [
      req.body.owner_id,
      req.body.owner_name,
      req.body.owner_email,
      req.body.owner_number,
      hashedPassword,
      req.body.owner_address,
      req.body.owner_city,
      req.file.path,
    ];
    const query = `INSERT INTO public.owners (user_id,owner_name, owner_email,owner_number, owner_password,owner_address,owner_city)
    VALUES ($1, $2, $3, $4, $5,$6,$7)`;
    await db.query(query, values);
    res.status(200).json({ message: "owner registered successfully." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the owner." });
  }
});

router.post("/login", async (req, res) => {
  const owner_email = req.body.owner_email;
  const owner_password = req.body.owner_password;

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
