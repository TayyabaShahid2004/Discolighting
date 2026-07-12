let redbutt=document.querySelector(".red");
let greenbutt=document.querySelector(".green");
let pinkbutt=document.querySelector(".pink");
let purplebutt=document.querySelector(".purple");
let orangebutt=document.querySelector(".orange");
let bluebutt=document.querySelector(".blue");

function redbutton(){
    document.body.style.backgroundColor="red";
};
function greenbutton(){
    document.body.style.backgroundColor="green";
};
function pinkbutton(){
    document.body.style.backgroundColor="pink";
};
function purplebutton(){
    document.body.style.backgroundColor="purple";
};
function orangebutton(){
    document.body.style.backgroundColor="orange";
};
function bluebutton(){
    document.body.style.backgroundColor="blue";
};
redbutt.addEventListener("click",redbutton);
greenbutt.addEventListener("click",greenbutton);
pinkbutt.addEventListener("click",pinkbutton);
purplebutt.addEventListener("click",purplebutton);
orangebutt.addEventListener("click",orangebutton);
bluebutt.addEventListener("click",bluebutton);