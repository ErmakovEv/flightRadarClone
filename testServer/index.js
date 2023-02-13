const express = require('express');
const cors = require('cors')
const PORT = 3000;
const router = require('./router')
var bodyParser=require("body-parser");
const multer = require('multer');
const upload = multer();

const app = express();
app.use(cors())
app.use(upload.none());
app.use(express.json());
app.use('/auth', router);
const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server working on ${PORT} port`)
        })
    } catch (error) {
        console.log(e)
    }
}

start()