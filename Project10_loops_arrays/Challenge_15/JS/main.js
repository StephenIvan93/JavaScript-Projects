//<------------------- Challenge #15 (A) --------------------------->
function car_list() {        
  var cars = ["Opel", "Mazda", "BMW", "Seat", "Audi", "Honda"]; //Array
  var count = 0;
  var text = "";

  for(; count < 6; count++) {
      if (count === 3) {
        break;          // Break exits the loop on the 3rd count.
      }
    text += "The car listed is: " + cars[count] + "<br>";
  } 
  document.getElementById("list").innerHTML = text;
}

//<------------------- Challenge #15 (B) --------------------------->
function car_listB() {        
  var cars = ["Opel", "Mazda", "BMW", "Seat", "Audi", "Honda"]; //Array
  var count = 0;
  var text = "";

  for(; count < 6; count++) {
      if (count === 3) {
        continue;          // Continue exits the loop on the 3rd count and continues after it again.
      }
    text += "The car listed is: " + cars[count] + "<br>";
  } 
  document.getElementById("listB").innerHTML = text;
}