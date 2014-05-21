  //from numGuess.js
  //page-level variables
  var guess;
  var correct; 
  var arr = [0,1,2,3,4,5,6,7,8,9];
  var turns;

  //components
  var output;
  var txtGuess;
  var btnAgain;
  
  function init(){
    //from numGuess.js
    //initialize components
    output = document.getElementById("output");
    txtGuess = document.getElementById("txtGuess");
    btnAgain = document.getElementById("again");
    
    //hide again button
    btnAgain.style.display = "none";
    
    //initialize counter
    turns = 0;
    
    //initialize output
    output.innerHTML = "I'm thinking of 4 different number. ";
    output.innerHTML += "Guess my number, and I'll tell if you are ";
    output.innerHTML += " correct position A or incorrect position is B.";
    output.innerHTML += " After you got 4 A then the game end.";
    
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
    txtGuess.focus();
    
  }  // end init
   
  function checkGuess(){
    //from numGuess.js
    //increment turns
    turns++;
    
    //get guess from user
    guess = parseInt(txtGuess.value);

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

    response = turns + ") " + txtGuess.value + " is  " + a_value + "A" + b_value + "B  ";
    if (guess ==  correct){
      response += "Correct!";
      //show again button
      btnAgain.style.display = "block";
    } else {
      response += "Please enter a 4 different number?";
    } // end if
    output.innerHTML += "<br/>" + response;
  }  // end checkGuess
