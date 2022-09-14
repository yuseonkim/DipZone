"use strict";

const express = require('express');
const app = express();
//라우팅
const home = require("./src/routes/home");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcrypt-nodejs");
const qrcode = require('qrcode');
const jwt = require("./src/public/module/jwt");
const userStorage = require("./src/models/UserStorage");
const User = require('./src/models/User');
//앱세팅
app.set("views",'./src/views');
app.set("view engine", "ejs"); //뷰엔진을 ejs로

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//url을 통해 전달되는 데이터에 한글 공백이 같은 문제 해결
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", home); //use -> 미들웨어 등록하는 메소드
app.use('/process', express.static(__dirname + '/public')); //css 사용하려고 추가

app.post('/scan',async (req,res,next)=>{
    const id = req.query.id;
    const user = await userStorage.getUserInfo(id);
    const jwtToken = await jwt.sign(user);
    qrcode.toDataURL(jwtToken.token,(err,src)=>{

        res.render('home/scan',{
            qr_code : src
        })
    })


})



module.exports = app;

