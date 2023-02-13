const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if(req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token) return res.status(403).json({mes: "Пользователь не авторизован!!!!"})
        const decodedToken = jwt.verify(token, 'secret');
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(403).json({mes: "Пользователь не авторизован! =)"})
    }
 }