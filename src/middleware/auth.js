const { verify } = require("jsonwebtoken");

module.exports.auth = (req, res, next) => {
  console.log(req);
  const token = req.get("authorization").split(" ")[1];
  console.log(token);
  if (!token) {
    res.status(401).json({
      message: "token not provide, Access denied !",
    });
  } else {
    verify(token, process.env.SECRET, (error, decoded) => {
      if (error) {
        res.status(401).json({
          message: "Invalid token",
        });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  }
};
