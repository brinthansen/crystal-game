
//global variables

var winCounter = 0;
var lossCounter = 0;
var randomNumber = Math.floor(Math.random() * 300) + 20;
$("#randomNumber").text(randomNumber);


//generates random number for each crystal

var crystal1 = Math.floor(Math.random() * 10) + 5;
var crystal2 = Math.floor(Math.random() * 10) + 5;
var crystal3 = Math.floor(Math.random() * 10) + 2;
var crystal4 = Math.floor(Math.random() * 10) + 12;


$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

var counter = 0;
$("#playerScore").text(counter);

function restartGame() {

randomNumber = Math.floor(Math.random() * 101) + 19;
$("#randomNumber").text(randomNumber);
crystal1 = Math.floor(Math.random() * 11) + 1;
crystal2 = Math.floor(Math.random() * 11) + 1;
crystal3 = Math.floor(Math.random() * 11) + 1;
crystal4 = Math.floor(Math.random() * 11) + 1;
counter = 0;
$("#playerScore").text(counter);

}

function win() {

	alert("You won!");
	winCounter ++;
	$("#winCounter").text(winCounter);
	restartGame();
}

function lose() {

	alert("You lose");
	lossCounter ++;
	$("#lossCounter").text(lossCounter);
	restartGame();
}

$('#crystal1').on ('click', function(){
    counter = counter + crystal1;
    
    $('#playerScore').text(counter); 
          
        if (counter == randomNumber){
          win();
        }
        else if (counter > randomNumber){
          lose();
        }   
  });  

$('#crystal2').on ('click', function(){
    counter = counter + crystal2;
    
    $('#playerScore').text(counter); 
         
        if (counter == randomNumber){
          win();
        }
        else if (counter > randomNumber){
          lose();
        }   
  });  

$('#crystal3').on ('click', function(){
    counter = counter + crystal3;
    
    $('#playerScore').text(counter); 
          
        if (counter == randomNumber){
          win();
        }
        else if (counter > randomNumber){
          lose();
        }   
  });  

$('#crystal4').on ('click', function(){
    counter = counter + crystal4;
    
    $('#playerScore').text(counter); 
         
        if (counter == randomNumber){
          win();
        }
        else if (counter > randomNumber){
          lose();
        }   
  });  










