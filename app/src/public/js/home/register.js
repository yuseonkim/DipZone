"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const name = document.querySelector("#name");
const confirmPsword = document.querySelector("#confirm-psword");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

const registerBtn = document.querySelector("#button");
registerBtn.addEventListener("click",register);
function register(){
    if(psword.value !== confirmPsword.value) {
        return alert("비밀번호가 일치하지 않습니다");
    }
    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
        email : email.value,
        address : address.value,
    };
    fetch("/register",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
        }else{
            alert(res.msg);
        }
    })
    .catch.err(new Error("회원가입 중 에러 발생"));
    
};

