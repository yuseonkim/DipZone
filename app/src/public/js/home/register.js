"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const confirmPsword = document.querySelector("#confirm-psword");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

const registerBtn = document.querySelector("#button");
registerBtn.addEventListener("click",register);
function register(){
    const req = {
        id : id.value,
        psword : psword.value,
        confirmPsword : confirmPsword.value,
        email : email.value,
        address : address.value,
    };
    console.log(req);
    fetch("/register",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if( res.success){
            location.href = "/login";
        }else{
            alert(res.msg);
        }
    })
    .catch.err(new Error("회원가입 중 에러 발생"));
    
};

