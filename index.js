var i = 1;            
var j=1;

var slides = document.getElementsByClassName("slide");


function myLoop(j) {  
    i=j;    
    if(i==1)
    {
      slides[3].style.display="none";
       slides[0].style.display="grid";
    }  
    else if(i==2)
    {
      slides[0].style.display="none";
      slides[1].style.display="grid";
       
    }
    else if(i==3)
    {
      slides[1].style.display="none";
      slides[2].style.display="grid";
      
    }
    else if(i==4)
    {
      slides[2].style.display="none";
      slides[3].style.display="grid";
     
    }
    else
    {
        i=0;
    }
}


myLoop(1); 

setInterval(function() {   
    i++;             
    myLoop(i);                                   
  }, 10000)

function hov( k)
{
   document.getElementsByTagName("hr")[k].style.display="block";
}
function nhov( k)
{
   document.getElementsByTagName("hr")[k].style.display="none";
}

function login(){
  document.body.style.margin="0px";
  document.getElementById("login").style.display="flex";
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

document.getElementById("close").onclick = function(){
   document.getElementById("login").style.display="none";
   document.body.style.margin="0px 16px";
   window.onscroll = function() {}
}

function signup(){
   document.body.style.margin="0px";
   document.getElementById("signup").style.display="flex";
   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
       window.onscroll = function() {
           window.scrollTo(scrollLeft, scrollTop);
       };
 }

 document.getElementById("close1").onclick = function(){
   document.getElementById("signup").style.display="none";
   document.body.style.margin="0px 16px";
   window.onscroll = function() {}
   if(document.getElementById("login").style.display==="flex")
   {
      document.getElementById("login").style.display="none";
   }
}


const img1=document.getElementById("iimage");
var imgpath="";

img1.addEventListener("change",function()
{
   const reader =new FileReader();
   reader.addEventListener("load" ,()=>{
      imgpath=reader.result;
      document.getElementById("image").src=`${imgpath}`;
   });
   reader.readAsDataURL(this.files[0]);
})

 function bk()
{
   alert("login to book");
}