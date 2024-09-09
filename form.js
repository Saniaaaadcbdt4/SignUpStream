let form1=document.querySelector("#form1");
let form2=document.querySelector("#form2");
let form3=document.querySelector("#form3");

let Next1=document.getElementById("Next1");
let Next2=document.getElementById("Next2");
let Back1=document.getElementById("Back1");
let Back2=document.getElementById("Back2");
let Next3=document.getElementById("Next3");
let prog=document.getElementById("progress")

Next1.onclick=function(){
    form1.style.left="-420px";
    form2.style.left="40px";
    prog.style.width="240px";
}
Back1.onclick=function(){
    form1.style.left="40px";
    form2.style.left="420px";
    prog.style.width="120px";
}

Next2.onclick=function(){
    form2.style.left="-420px";
    form3.style.left="40px";
    prog.style.width="360px";
}
Back2.onclick=function(){
    form2.style.left="40px";
    form3.style.left="420px";
    prog.style.width="240px";
}
