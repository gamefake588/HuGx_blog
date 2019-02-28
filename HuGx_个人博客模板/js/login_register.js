

// 变量声明
var switch_register = document.getElementById('switch_register'),
    switch_login = document.getElementById('switch_login')
var body_register = document.getElementById('body_register'),
    login_body = document.getElementById('login_body')

var Verification_Code = document.getElementById('Verification_Code')

// 验证码
function Verification_Code1(){

    var skr = ""

    for(var i = 0; i<4; i++){
        skr += parseInt(Math.random()*10);
    }
    Verification_Code.innerHTML = skr

}
// 点击切换 登陆，注册
switch_login.onclick = function(){
    
    login_body.style.display = 'block'
    body_register.style.display = 'none'

}
switch_register.onclick = function(){
    
    login_body.style.display = 'none'
    body_register.style.display = 'block'
    

}



// 表单验证
// 登陆
var login = document.getElementById('login'),       //登陆按钮
    code_a = document.getElementById('code_a'),     //验证码
    user_login = document.getElementById('user_login'),     //用户名
    pass_login = document.getElementById('pass_login'),      //密码

    empty = null || " ",         //空
    reguser = /^[\u4e00-\u9fa5]+$/,    //汉字
    number = /^[A-Za-z0-9]+$/,         //密码
    phone = /^1[34578]\d{9}$/;  //手机

// 登陆提交验证
function mylogin(){
    
    if(code_a.value=="" || code_a.value==null){
        alert('验证码不能为空')
        return false
    }
    if(code_a.value != Verification_Code.innerHTML){
        alert('验证码不正确')
        window.location.reload()
        code_a.value = ""
        return false
    }
    return true
    
}

// 注册验证
var user_register = document.getElementById('user_register'),       //用户名
    pass_register = document.getElementById('pass_register'),       //密码  
    alsopass = document.getElementById('alsopass'),                 //再次密码
    phone_register = document.getElementById('phone_register');      //手机号

function userRegister(){

    if(!reguser.test(user_register.value)){

        user_register.classList.add("Together")
        return false

    }
    else{
        user_register.classList.remove("Together")
    }

    if(user_register.value.length <4){

        user_register.classList.add("Together")
        return false

    }
    else{
        user_register.classList.remove("Together")
    }

}

function passRegister(){

    if(!number.test(pass_register.value)){

        pass_register.classList.add("Together")
        return false

    }
    else{
        pass_register.classList.remove("Together")
    }
    
    if(pass_register.value.length <6){

        pass_register.classList.add("Together")
        return false

    }
    else{
        pass_register.classList.remove("Together")
    }

}
alsopass.onblur = function(){

    if(alsopass.value != pass_register.value){

        alsopass.classList.add("Together")
        return false

    }
    else{
        alsopass.classList.remove("Together")
    }

}

function phoneRegister(){

    if(!phone.test(phone_register.value)){

        phone_register.classList.add("Together")
        return false

    }
    else{
        phone_register.classList.remove("Together")
    }


}

function myregister(){

}

