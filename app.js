document.getElementById('soccerodds').style.display='none';
document.getElementById('register').style.display='none';
document.getElementById('logindiv').style.display='none';

document.getElementById('football').addEventListener('click',function(){
    document.getElementById('default').style.display='none';
    document.getElementById('soccerodds').style.display='block';
});

document.getElementById('backbtn').addEventListener('click',function(){
    document.getElementById('default').style.display='block';
    document.getElementById('soccerodds').style.display='none';
});

document.getElementById('registerbtn').addEventListener('click',function(){
    document.getElementById('default').style.display='none';
    document.getElementById('soccerodds').style.display='none';
    document.getElementById('logindiv').style.display='none';
    document.getElementById('register').style.display='block';
});

document.getElementById('loginbtn').addEventListener('click',function(){
    document.getElementById('default').style.display='none';
    document.getElementById('soccerodds').style.display='none';
    document.getElementById('logindiv').style.display='block';
    document.getElementById('register').style.display='none';
});

document.getElementById('regcancel').addEventListener('click',function(){
    document.getElementById('default').style.display='block';
    document.getElementById('soccerodds').style.display='none';
    document.getElementById('logindiv').style.display='none';
    document.getElementById('register').style.display='none';
});

document.getElementById('logincancel').addEventListener('click',function(){
    document.getElementById('default').style.display='block';
    document.getElementById('soccerodds').style.display='none';
    document.getElementById('logindiv').style.display='none';
    document.getElementById('register').style.display='none';
});