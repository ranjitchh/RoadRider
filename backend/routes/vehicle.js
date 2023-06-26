const express = require("express");
const router = express.Router();
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

const upload = multer({ storage: storage }).array("files", 3);

router.get("/", async (req, res) => {
  const query = `SELECT * FROM  public.vehicles`;
  try {
    const data = await db.query(query);
    const result = data.rows;
    return res.send(result).status(200);
  } catch (error) {
    console.log(error);
  }
});

router.get("/type", async (req, res) => {
  const type = req.body.type;
  const categoryQuery = `SELECT category_id FROM public.category WHERE type = $1`;
  try {
    const categoryData = await db.query(categoryQuery, [type]);
    const categoryIds = categoryData.rows.map((row) => row.category_id);

    const placeholders = categoryIds
      .map((_, index) => `$${index + 1}`)
      .join(", ");

    const vehicleQuery = `SELECT * FROM public.vehicles WHERE category_id IN (${placeholders})`;

    const vehicleData = await db.query(vehicleQuery, categoryIds);
    const result = vehicleData.rows;

    return res.send(result).status(200);
  } catch (error) {
    console.log(error);
  }
});

router.post("/add", (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ error: "An error occurred while uploading the images." });
    }

    const files = req.files;
    const filePaths = files.map((file) => file.path);

    const values = [req.body.category_model, req.body.category_type];

    const catQuery = `SELECT category_id FROM public.categories WHERE category_model = $1 AND category_type = $2`;

    const category_id = await db.query(catQuery, values);
    category_id = category_id.rows;

    values = [
      req.body.owner_id,
      category_id,
      req.body.vehicle_name,
      filePaths[0],
      filePaths[1],
      filePaths[2],
    ];

    const query = `INSERT INTO public.vehicles(
        owner_id, category_id, vehicle_name
        image_url, image_url2, image_url3)
        VALUES ($1, $2, $3, $4, $5, $6)`;

    try {
      await db.query(query, values);
      res.status(200).json({ message: "Uploaded the vehicle successfully." });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while uploading the vehicle." });
    }
  });
});

module.exports = router;
