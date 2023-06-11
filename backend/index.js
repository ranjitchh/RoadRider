
const express=require("express")
const cors =require("cors")
//const user ="./routes/userAuthentication"
const user = require("./routes/userAuthentication");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("uploads"));
app.use("/uploads", express.static("./uploads"));

app.use("/user",user)
app.listen(8800, () => {
  console.log("Server started on port 8800");
});