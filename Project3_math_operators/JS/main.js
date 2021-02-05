function additionFunction() {   // Addition Function
    var num1 = 304;             // num1 variable.
    var num2 = parseInt(prompt("Please enter a number that can be added to 304:"));  // Prompt for num2 variable.
    var add = num1 + num2 ;         // Sum of num1 & num2Add.

    document.getElementById("Math").innerHTML = "The sum of the two numbers is: " + add ; // Output for Addition Challenge #16
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function subFunction() {        //Subtraction Function
  var sub = 10 - 3;            // Variables.
  document.getElementById("subtract").innerHTML = "The subtraction of 10 - 3 is: " + sub; // Output for Subtraction Challenge #17

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function multiplyBy()           // Output for Multiplication Challenge #18
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy()           // Output for Division Challenge #18
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 / num2;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function divFunction() {        //Subtraction Function
  var div = 5 % 3;            // Variables.
  document.getElementById("modulus").innerHTML = "The remainder of 5 - 3 is: " + div; // Output for Remainder Challenge #20
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function negation_operator() {            // Output for Negation Operator Challenge #21
  var x = 24;
  document.getElementById("Neg_Math").innerHTML = -x;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Increment()           // Output for Increment Challenge #22
{
        num1 = parseInt(prompt("Please enter a number:"));
        num1++;
        document.getElementById("Increment").innerHTML = num1;
}
function Decrement()           // Output for Decrement Challenge #22
{
        num2 = parseInt(prompt("Please enter a number:"));
        num2--;
        document.getElementById("Decrement").innerHTML = num2;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Random()           // Output for Random number Challenge #23
{
  return window.alert(Math.random() * 100);
}
