console.log('Loaded!');
var content=document.getElementById("content");
var button=document.getElementById("button");
button.onclick=function(){
    content.innerHTML="WELCOME TO MY WEBPAGE";
};
var i=document.getElementById("madi");
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    i.style.marginLeft=marginLeft+'px';
}
i.onclick=function(){
var interval=setInterval(moveRight,50);    
 // i.style.marginLeft="100px";  
};
var x=document.getElementById("counter");
x.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
      if(request.readyState===XMLHttpRequest.DONE){
          if(request.status===200){
              var counter=request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
          }
      }  
    };
    request.open('GET','http://nivetha96.imad.hasura-app.io/counter',true);
    request.send(null);
};

var n=document.getElementById("name").value;
var s=document.getElementById("submit");
s.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
      if(request.readyState===XMLHttpRequest.DONE){
          if(request.status===200){
    var names=request.responseText;
    names=JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++){
        list +='<li>'+names[i]+'</li>';
        
    }
    var ul=document.getElementById("namelist");
    ul.innerHTML=list;     
          }
      }  
    };
    request.open('GET','http://nivetha96.imad.hasura-app.io/ui/personal.html/submit?name='+name,true);
    request.send(null);

};

