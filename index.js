var randomnuber=Math.floor(Math.random()*6)+1;//random number zenerator 1-6
var randomdiceimage="dice"+ randomnuber +".png";
var randomImagesource1="images/" + randomdiceimage;
var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource1);


var randomnuber1=Math.floor(Math.random()*6)+1;
var randomimagesource2="images/dice"+ randomnuber1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomnuber>randomnuber1){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomnuber<randomnuber1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}