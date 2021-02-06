function first_dictionary() {   // Fuction ID   Assignment #24
    var car = {
      Make:"Opel",          //Dictionary
      Model:"Insignia",
      Colour:"Red",
      Body_Type:"Saloon",
      Year_Manufactured:"2010"
    };
    document.getElementById("Dictionary").innerHTML = car.Body_Type; //Outputs value
  }
//<-------------------Assignment #25--------------------------->
  function first_dictionary() {   // Fuction ID   Assignment #25
    var car = {
      Make:"Opel",          //Dictionary
      Model:"Insignia",
      Colour:"Red",
      Body_Type:"Saloon",
      Year_Manufactured:"2010"
    };
    delete car.Body_Type;   // Delete operator
    document.getElementById("Dictionary").innerHTML = car.Body_Type; //Outputs value
  }