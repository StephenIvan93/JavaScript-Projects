//<------------------- Assignment #44--------------------------->
function concatMethod() {
  var word_1 ="Hello " ;
  var word_2 = "World!" ;
  var sentence = word_1.concat(word_2);  // Concattenation occurs
  document.getElementById("Concatenate").innerHTML = sentence;  //Output
}

//<------------------- Assignment #45--------------------------->
function sliceMethod() {
  var sentence2 ="Hello and welcome to assignment 45 were we lean how the Slice Method" ;
  var section = sentence2.slice(56, 68);  // Slice occurs
  document.getElementById("slice").innerHTML = section;  //Output
}

//<------------------- Challenge #10--------------------------->
var sentence3 ="original sentence was all lowercase and should now be all uppercase" ;

function upperMethod() {
  var section = sentence3.toUpperCase();  // Uppercase occurs
  document.getElementById("ToUpper").innerHTML = section;  //Output
}

function searchMethod() {
  var section = sentence3.search("sentence");  // Search occurs
  document.getElementById("search").innerHTML = section;  //Output
}

//<------------------- Assignment #46 --------------------------->
function numberMethod() {
  var num1 = 204;
  document.getElementById("number").innerHTML = num1.toString();  //Output to String
}

//<------------------- Assignment #47 --------------------------->
function precisionMethod() {
  var pie = 3.14159265;
  document.getElementById("Precision").innerHTML = pie.toPrecision(3);  //Output pie to two decimal places
}

//<------------------- Challenge #11 --------------------------->
function fixedMethod() {
  var x = 12.357546;
  var f = x.toFixed(2);         // toFixed Method
  document.getElementById("fixed").innerHTML = f;  //Output to two decimal places
}

function valueMethod() {
  var str = "ValueOf method returns the primitive value of the string object";
  var s = str.valueOf();         // valueOf Method
  document.getElementById("value").innerHTML = s;  //Output
}