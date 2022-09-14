"use strict"

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        try{
        const user  = await UserStorage.getUserInfo(client.id);
        if (user) {
            if (user.id === client.id && user.psword === client.psword) {
                return { success: true,
                client: client};
            }
            return { success: false, msg: "비밀번호가 틀렸습니다" };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다" };
    }catch(err){
        return { success : false,  msg:err};
    }
    }

    async adminLogin() {
        const client = this.body;
        try{
        const user  = await UserStorage.getAdminInfo(client.id);
        if (user) {
            if (user.id === client.id && user.psword === client.psword) {
                return { success: true
                , client : client };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다" };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다" };
    }catch(err){
        return { success : false,  msg:err};
    }
    }

    async register() {
        try {
            const client = this.body;
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success : false , msg: err};
        }
    }
};

module.exports = User;