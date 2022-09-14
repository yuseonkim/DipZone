"use strict";

const express = require('express');
const app = express();
//라우팅
const home = require("./src/routes/home");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcrypt-nodejs");
//앱세팅
app.set("views",'./src/views');
app.set("view engine", "ejs"); //뷰엔진을 ejs로

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//url을 통해 전달되는 데이터에 한글 공백이 같은 문제 해결
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", home); //use -> 미들웨어 등록하는 메소드
app.use('/process', express.static(__dirname + '/public')); //css 사용하려고 추가



module.exports = app;

