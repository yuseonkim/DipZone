"use strict";
const express =require ("express");
const router = express.Router();
const ctrl = require("./home.ctrl");
const db = require("../../config/db");
const UserStorage = require("../../models/UserStorage")
const qrCode =require('qrcode');


router.get("/",ctrl.output.home);

router.get("/login", ctrl.output.login);
router.get("/register" ,ctrl.output.register);
router.get("/qr", ctrl.output.qr);
router.get("/admin", ctrl.output.admin);
router.get("/admin_login",ctrl.output.adminLogin);

router.post("/login", ctrl.process.login);
router.post("/register" ,ctrl.process.register);
router.post("/admin_login" ,ctrl.process.adminLogin);


//abc

module.exports = router;