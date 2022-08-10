const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const { registration, login } = require("../models/auth");

exports.register = (req, res) => {
  const { username, password } = req.body;

  if (!username && !password) {
    return res.status(422).json({
      error: "registration not success. Valid data not sent in the request.",
    });
  }

  const salt = uuidv4();
  const encryptedPassword = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");

  registration(username, encryptedPassword, salt).then((result) => {
    if (result === "success")
      return res.status(201).json({ message: "account created successfully" });
    else return res.status(400).json({ message: "error creating accouting" });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  login(username).then((userObj) => {
    if (!userObj)
      return res
        .status(400)
        .json({ error: "the user not available in the application" });

    const encryptedPassword = crypto
      .pbkdf2Sync(password, userObj.dataValues.salt, 1000, 64, "sha512")
      .toString("hex");

    if (userObj.dataValues.password !== encryptedPassword)
      return res.status(401).json({ message: "Unauthorized" });

    const token = crypto
      .pbkdf2Sync(
        userObj.dataValues.username.toString(),
        "newly logged in user",
        1000,
        64,
        "sha512"
      )
      .toString("hex");

    return res.status(200).json({
      message: "authenticated",
      token: token,
      generateTime: new Date(),
    });
  });
};
