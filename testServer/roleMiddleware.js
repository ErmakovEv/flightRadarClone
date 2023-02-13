const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(403).json({ mes: "Пользователь не авторизован!" });
    const { role } = jwt.verify(token, "secret");
    if (role !== "admin") return res.status(403).json({ mes: "Нет прав доступа" });
    console.log("1")
    next();
  } catch (error) {
    console.log("4")
    return res.status(403).json({ mes: "Пользователь не авторизован!" });
  }
};
