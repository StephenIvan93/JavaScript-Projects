//<------------------- Assignment #39 (Global Scope)--------------------------->
var num1 = prompt("Enter a number");        // Global variable

function global_Scope() {
   
    if (num1 != null) {
    document.getElementById("global").innerHTML = "Your number is " + num1 ;
    }
}

//<------------------- Assignment #39 (Internal Scope)--------------------------->
function internal_Scope() {
    var num2 = prompt("Enter a number");        // Internal variable
    if (num2 != null) {
    document.getElementById("internal").innerHTML = "Your number is " + num2 ;
    }
}

//<------------------- Assignment #39 (Function with Error)--------------------------->
function myFunction() {
    var person = prompt("Please enter your name" , "Stephen");
    if (person != null) {
      
      console.log(erson);
    }
  }

  //<------------------- Assignment #40 ---------------------------> 
  function get_Date() {
    var d = new Date("February 16, 2021 18:00:00");
    var h = d.getHours();
    if (new Date().getHours() > 12){
      document.getElementById("AM").innerHTML = "Time is in the PM";
    }
  }

  //<------------------- Assignment #41 --------------------------->  Code Containing IF statement
  function if_function() {
    var number1 = prompt("Enter a number");       
    if (number1 <= 20) {
    document.getElementById("myIf").innerHTML = "Your number: " + number1 + " is less than 20." ;
    }
}

  //<------------------- Assignment #42 --------------------------->  Code Containing Else statement
  function else_function() {
    var drink;
    var Age;
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
      drink = "You are old enough to Drink alcohol";
    }
    else {
      drink = "Sorry you are under the age limit and cannot drink alocohol.";
    }
    document.getElementById("else").innerHTML = drink;
  }

   //<------------------- Assignment #43 --------------------------->  Code Containing IF Else statement
   function elseif_function() {
    var grade = prompt("Enter your grade"); 
    var result;
    if (grade >= 70) {
      result = "You received a Distinction";
    }
    else if (grade >= 60) {
      result = "You have received a Merit";
    }
    else if (grade >= 50) {
      result = "You have received a Pass";
    }
    else {
      result = "You have Failed";
    }
    document.getElementById("elseif").innerHTML = result;
  }