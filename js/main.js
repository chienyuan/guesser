//from main.js
//page-level variables
var guess;
var win;
var correct; 
var arr = [0,1,2,3,4,5,6,7,8,9];
var trys = [];
var turns;
var movesLimit = 20;

$(document).ready(function(){
    $('#txtGuess').keypress(function(e){
      if(e.keyCode==13)
      $('#checkButton').click();
    });
});

function boardMsg(x){
  return $("#board").prepend(x);
}
function instructionMsg(x){
  return $("#instruction").text(x);
}

function checkTrys(num){
  return trys.indexOf(num) != -1;
}

function init(){
  trys = [];
  win = false;
  turns = 0;
  $("#board").empty();
  $("#txtGuess").val("");
  //generate random for correct answer
  console.log(arr);
  for(i=0;i<10;i++){
    var pos = parseInt(Math.random() * 10);
    var tmp = arr[0];
    arr[0] = arr[pos];
    arr[pos] = tmp;
  }
  if( arr[0] == 0 ) arr[0] = arr[9] ;
  correct = arr[0] * 1000 + arr[1] * 100 + arr[2] * 10 + arr[3];
  console.log(correct);
  
  //make sure input text gets focus
  $("#txtGuess").focus();
}

$("#newButton").click(function(){
  console.log("New Game");
  init();
});

$("#checkButton").click(function(){

  if( win ) {
    alert("The game already end, you could click new game button now!");
    return;
  }


  guess = parseInt($("#txtGuess").val().substring(0,4));

  if( checkTrys(guess) ){
    alert("The guess alrady there, try another number! ");
    return;
  }

  turns++;
  trys.push(guess);
  console.log("click checkButton" + "with " + guess );

  var a_value = 0;
  var b_value = 0;
  var tmp = guess;
  var v3 =  tmp  % 10;
  tmp =  ( tmp - v3 ) / 10  ;
  var v2 = tmp % 10;
  tmp =  ( tmp - v2 ) / 10  ;
  var v1 = tmp % 10;
  tmp =  ( tmp - v1 ) / 10  ;
  var v0 = tmp % 10;

  // check how many a and b 
  if( v0 == arr[0] ) a_value += 1;
  else if( v0 == arr[1] || v0 == arr[2] || v0 == arr[3] ) b_value += 1;

  if( v1 == arr[1] ) a_value += 1;
  else if( v1 == arr[0] || v1 == arr[2] || v1 == arr[3] ) b_value += 1;

  if( v2 == arr[2] ) a_value += 1;
  else if( v2 == arr[1] || v2 == arr[0] || v2 == arr[3] ) b_value += 1;

  if( v3 == arr[3] ) a_value += 1;
  else if( v3 == arr[1] || v3 == arr[2] || v3 == arr[0] ) b_value += 1;

  response = turns + ") " + guess + " is  " + a_value + "A" + b_value + "B  <br/>";
  boardMsg(response);
  if (guess ==  correct){
    win = true;
    instruct = "Correct!";
    //show again button
    //btnAgain.style.display = "block";
  } else {
    instruct = "Please enter a 4 different number?";
    if( turns > movesLimit ){
      alert("Are you serious, you can't get the answer in "+ movesLimit +" moves, Let me tell you the answer: " + correct);
      return;
    }
  } // end if
  instructionMsg(instruct); 
  $("#txtGuess").focus();

});






