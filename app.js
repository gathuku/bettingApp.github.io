document.getElementById('soccerodds').style.display='none';
document.getElementById('football').addEventListener('click',function(){
    document.getElementById('default').style.display='none';
    document.getElementById('soccerodds').style.display='block';
});

document.getElementById('backbtn').addEventListener('click',function(){
    document.getElementById('default').style.display='block';
    document.getElementById('soccerodds').style.display='none';
});