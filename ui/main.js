console.log('Loaded!');
var content=document.getElementById("content");
var button=document.getElementById("button");
button.onclick=function(){
    content.innerHTML="WELCOME TO MY WEBPAGE";
};
var i=document.getElementById("madi");
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+100;
    i.style.marginLeft=marginLeft+'px';
}
i.onclick=function(){
var interval=setInterval(moveRight,100);    
 // i.style.marginLeft="100px";  
};