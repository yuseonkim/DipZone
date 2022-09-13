"use strict";

const User = require("../../models/User");
const db = require("../../config/db");

const output = {

    home : (req,res) =>{
    res.render("home/index");
    },
    login :  (req,res)=>{
        res.render("home/login");
    },
    register : (req,res)=>{
        res.render("home/register");
    },
    qr : (req,res)=>{
        res.render("home/qr");
    },
    admin : (req,res)=>{
        res.render("home/admin");
    },
};

const process = {
    login : async (req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    
    register : async (req,res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);

    }
}


module.exports = {
    output,
    process,
};