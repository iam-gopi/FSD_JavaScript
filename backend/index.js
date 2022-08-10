const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./models/dbhelper");
const authRoute = require("./routes/auth");
const cors = require("cors");

const app = express();
app.use(cors()); // *

db.connection();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

//route
app.use("/api/auth", authRoute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app running at ${port}`);
});
