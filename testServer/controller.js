const User = require('./user');
const jwt = require('jsonwebtoken');
const db = [];

class Controller {
    async registration(req, res) {
        try {
            const {username, pass, role} = req.body;
            console.log(username, pass, role)
            const candidate = db.find(item => item["name"] === username)
            if (candidate) return res.status(400).json('Пользователь с таким именем уже существует')
            const user = new User(username, pass, role)
            db.push(user);
            return res.status(200).json('Пользователь успешно зарегистрирован!')
        } catch (error) {
            console.log(error)
        }
    }
    async login(req, res) {
        try {
            const {username, pass} = req.body;
            const candidateName = db.find(item => item["name"] === username)
            if(!candidateName) return res.status(400).json('Пользователь с таким именем не существует')
            const candidatePass = db.find(item => item["pass"] === pass)
            if(!candidatePass) return res.status(400).json('Пароль неверный!')
            const token = generateAccessToken(candidateName.name, candidateName.role);
            return res.status(200).json({token})
        } catch (error) {
            console.log(error)
        }
    }
    async getUsers(req, res) {
        try {
            console.log('2')
            res.json(db)
        } catch (error) {
            console.log('3')
            console.log(error)
        }
    } 
}


function generateAccessToken(username, role) {
    const payload = {
        username, role
    }
    return jwt.sign(payload, 'secret', {expiresIn: '1h'})
}

module.exports = new Controller();