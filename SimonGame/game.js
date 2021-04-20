var userClickdPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

$(document).keydown(function(){
  if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
  userClickdPattern.push(userChosenColor);
  console.log(userClickdPattern);
  playSound(userChosenColor);
  animatePressed(userChosenColor);
  checkAnswer(userClickdPattern.length-1);
});

function checkAnswer(currentLevel){
  if (userClickdPattern[currentLevel] === gamePattern[currentLevel]){
    console.log('Good job!');
  
  if (userClickdPattern.length === gamePattern.length){
    setTimeout(function() {
      nextSequence();
    }, 1000);
  }
  }
 else {
  var wrong = new Audio("sounds/wrong.mp3");
  wrong.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Game Over, Press Any Key to Restart");
  startOver();
}
}

function nextSequence() {
  userClickdPattern = [];
  level++;
  $("#level-title").text("Level " + level);  
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  //console.log(gamePattern);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  
  playSound(randomChosenColor);
  
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePressed(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}







