var ran1=(Math.random());
 var random1=(Math.floor(ran1*6)+1);
randomimage="dice"+random1+".png";
randimg="images/"+randomimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randimg);

var ran2=(Math.random());
var random2=(Math.floor(ran2*6)+1);
randomimage2="dice"+random2+".png";
randimg2="images/"+randomimage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randimg2);



if(random1 > random2){
  document.querySelector("h1").innerHTML= "Shrijak WINS";
}
else if(random1 < random2){
  document.querySelector("h1").innerHTML="Aayushma WINS";
}
else{
  document.querySelector("h1").innerHTML="draw";
}
