var random1 = Math.floor((Math.random() * 6) + 1);
console.log(random1);
var random2 = Math.floor((Math.random() * 6) + 1);
console.log(random2);

document.querySelector(".img1").setAttribute("src", "images/dice" + random1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + random2 + ".png");

if(random1 > random2){
  document.querySelector("h1").innerHTML = "Play 1 Wins!";
}else if(random1 < random2){
  document.querySelector("h1").innerHTML = "Play 2 Wins!";
}else{
  document.querySelector("h1").innerHTML = "Draw, try again please!";
}

