const express=require("express")
const router = express.Router();
const  bcrypt=require("bcryptjs")
const db=require("../db/config.js")

const multer=require("multer")

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
    const user_password = req.body.user_password;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user_password, salt);
    const values = [
      req.body.user_id,
      req.body.user_name,
      req.body.user_email,
      req.body.user_number,
      hashedPassword,
      req.body.user_address,
      req.body.user_city,
      req.file.path,
    ];
    const query = `INSERT INTO public.users (user_id,user_name, user_email,user_number, user_password,user_address,user_city,user_dl)
    VALUES ($1, $2, $3, $4, $5,$6,$7,$8)`;
    await db.query(query, values);
    res.status(200).json({ message: "user registered successfully." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user." });
  }
});

router.post("/login", async (req, res) => {
    const user_email = req.body.user_email;
    const user_password = req.body.user_password;
  
    try {
      const query = `
        SELECT user_password, user_id
        FROM public.users
        WHERE user_email = $1
      `;
  
      const result = await db.query(query, [user_email]);
  
      if (result.rows.length === 0) {
        // No user found with the provided email
        return res.status(401).json({ error: "Invalid user credentials" });
      }
  
      const storedPassword = result.rows[0].user_password;
      const isMatch = await bcrypt.compare(user_password, storedPassword);
  
      if (isMatch) {
        const ID = result.rows[0].user_id;
        // Passwords match, authentication successful
        res
          .status(200)
          .json({ message: "User authentication successful", id: ID });
      } else {
        // Passwords don't match, authentication failed
        res.status(401).json({ error: "Invalid user credentials" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred during login" });
    }
  });
  

module.exports = router;