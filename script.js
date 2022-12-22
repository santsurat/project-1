var css = document.querySelector("h3");
var Color1 = document.querySelector(".color1");
var Color2 = document.querySelector(".color2");
var Body = document.getElementById("gradient");


function SetGradient() {
    Body.style.background = "linear-gradient(to right, " 
    + Color1.value
    + "," 
    +  Color2.value
    + ")";

    css.textContent = Body.style.background + ";" ;
}

// Color1.addEventListener("input" , SetGradient);
// Color2.addEventListener("input" , SetGradient);
