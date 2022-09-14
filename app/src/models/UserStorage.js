"use strict"

const db = require("../config/db");

const User = require("./User");


class UserStorage{
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const usersKeys = Object.keys(users);
            const userInfo = usersKeys.reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser;
            },{});
        console.log(userInfo);
        return userInfo;
    }


    static getUserInfo(id){
       return new Promise((resolve, reject)=> {
        const query = "select * from users where id = ?";
        db.query(query , [id], (err,data) => {
            if (err) reject(`${err}`);
            resolve(data[0]);
        });
        });
}

static getAdminInfo(id){
    return new Promise((resolve, reject)=> {
     const query = "select * from admin where id = ?";
     db.query(query , [id], (err,data) => {
         if (err) reject(`${err}`);
         resolve(data[0]);
     });
     });
}
    
    static async save(userInfo) {
        return new Promise((resolve, reject)=> {
            const query = "Insert into users(id,name,psword) values (?,?,?)";
            db.query(query , [userInfo.id, userInfo.name, userInfo.psword], (err) => {
                if (err) reject(`${err}`);
                resolve({success : true});
            });
            });
    
            
    }
};

module.exports = UserStorage;