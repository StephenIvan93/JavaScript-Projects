//-------------------- Assignment #56 ---------------------------------- 
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").Value;
    var Color_String = " is a great Color!";
    switch(Colors) {
        case "Red":
        Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
        Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
        Color_Output = "Green" + Color_String;
        break;
        case "Blue":
        Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
        Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
        Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a Color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//-------------------- Assignment #57 ---------------------------------- 
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//-------------------- Challenge #16 ---------------------------------- 
window.addEventListener("load", () => {
    var c = document.querySelector("#canvas");
    var ctx = c.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    ctx.strokeStyle = "red";
    ctx.strokeRect(100, 100, 200, 200);

    ctx.strokeStyle = "blue";
    ctx.strokeRect(150, 150, 200, 200);

    ctx.strokeStyle = "red";
    ctx.strokeRect(200, 200, 200, 200);
});

//-------------------- Challenge #17 ---------------------------------- 
window.addEventListener("load", () => {     
    var c = document.querySelector("#canvas_method");
    var ctx = c.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    var grd = ctx.createLinearGradient(0, 0, 170, 0);   //Gradient color
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "yellow");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 200, 100);
});


