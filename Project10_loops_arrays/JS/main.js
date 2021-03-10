//<------------------- Assignment #50--------------------------->
function Call_Loop() {        // While Loop
  var cars = ["Opel", "Mazda", "BMW", "Seat", "Audi", "Honda"];  //Array
  var count = 0;
  var text = "";

  while(cars[count]) {
    text +=cars[count] + "<br>";
    count++;
  } 
  document.getElementById("Loop").innerHTML = text;
}

//<------------------- Assignment #51 --------------------------->
function for_Loop() {        // For Loop
  var cars = ["Opel", "Mazda", "BMW", "Seat", "Audi", "Honda"]; //Array
  var count = 0;
  var text = "";

  for(; count < 6; count++) {
    text += "The car listed is: " + cars[count] + "<br>";
 
  } 
  document.getElementById("List_of_Instructions").innerHTML = text;
}

//<------------------- Assignment #52 --------------------------->
function array_Function() {        // Array Function
  var cars = ["Opel", "Mazda", "BMW", "Seat", "Audi", "Honda"]; //Array
 
  document.getElementById("Array").innerHTML = cars[2]; //Output element at index 2
}

//<------------------- Assignment #53 --------------------------->
function Constant_Function() {        // Constant Function
  const Car_Spec = {make:"VW", model:"Arteon", color:"Gold"} ;
  Car_Spec.model = "Passat";
  Car_Spec.enginesize = 2.0;
 
  document.getElementById("Constant").innerHTML = "The color on the car spec is " + Car_Spec.color;
  document.getElementById("Constant").innerHTML = "The model of the car spec is " + Car_Spec.model + " and has an engine size of " + Car_Spec.enginesize + " litres.";
}

//<------------------- Assignment #54 --------------------------->
function Let_Function() {
  let num = 5;
  for (let num = 0; num < 10; num++) {
  
  }
  document.getElementById("Let").innerHTML = num;
}


 