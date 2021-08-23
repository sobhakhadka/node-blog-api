const userModel = require("../models/user");
const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken"); // This function is used to generate the token

module.exports.login = (req, res, next) => {
  userModel
    .getUserByEmail(req.body.email)
    .then(([rows, metadata]) => {
      const user = rows[0];
      console.log(user);
      // const result = compareSync(req.body.password, user.password);
      const result = req.body.password === user.password;
      console.log(result);
      if (result) {
        user.password = undefined;
        const jsonToken = sign({ result, user }, process.env.SECRET, {
          expiresIn: "1h",
        });
        res.status(201).json({
          success: 1,
          message: "Login Successfully",
          token: jsonToken,
        });
      } else {
        console.log("Invalid Password");
        res.status(401).json({
          success: 0,
          message: "Invalid Password",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: 0,
        message: `Internal Server Error: ${err}`,
      });
    });
};
