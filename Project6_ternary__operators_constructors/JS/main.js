//<------------------- Assignment #35 --------------------------->
function Ride_Function(){
  var Height, Can_ride;
  Height = document.getElementById("Height").Value;
  Can_ride = (Height < 52) ? "You are to short":"You are tall enough"; //Check height to ride
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";  //Output Result
}
//<------------------- Challenge #8 --------------------------->
function Vote_Function() {
  var age, votecheck;
  age = document.getElementById("age").value;
  votecheck = (age < 18) ? "You are not old enough":"You are old enough";  // Check age to vote
  document.getElementById("vote").innerHTML = votecheck + " to vote."; //Output Result
}

//<------------------- Assignment #36 --------------------------->
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
  "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
  " manufactured in " + Erik.Vehicle_Year;
}
//<------------------- Assignment #37 --------------------------->
function myNewFunction() {
  document.getElementById("New_and_this").innerHTML = 
  "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model +
  " manufactured in " + Emily.Vehicle_Year;
}

//<------------------- Challenge #9 --------------------------->
// Constructor function for Dog objects
function Dog(Breed, Age, Colour) {
  this.Dog_Breed = Breed;
  this.Dog_Age = Age;
  this.Dog_Colour = Colour;
}
// Create a Dog object
var dog = new Dog("Dolmation", 4, "White and Black");

// Display Breed
function DogFunction() {
  document.getElementById("reserved").innerHTML =
  "My Dog's breed is a" + dog.Dog_Breed + "."; 
}

//<------------------- Assignment #38 --------------------------->
var add = (function () {      //Function Starting point at 0 increment by 1
  var counter = 0;        
  return function () {counter += 1; return counter;}
})();

function countFunction(){
  document.getElementById("Nested_Function").innerHTML = add(); //Outputs function
}