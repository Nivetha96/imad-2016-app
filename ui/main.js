console.log('Loaded!');
var content=document.getElementById("content");
var button=document.getElementById("button");
button.onclick=function(){
    content.innerHTML="WELCOME TO MY WEBPAGE";
};
var i=document.getElementById("img");
i.onclick=function(){
  i.style.marginLeft="100px";  
};