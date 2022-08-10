const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { register, login } = require("../controllers/auth");

router.post(
  "/register",
  [
    check("username", "email is not valid").isEmail(),
    check("password", "password is not satisfied").isLength({
      min: 3,
      max: 10,
    }),
  ],
  register
);

router.post(
  "/login", [
    check("username", "email is not valid").isEmail(),
    check("password", "password is not satisfied").isLength({
      min: 3,
      max: 10,
    }),
  ],
  login
)
module.exports = router;