var input = document.getElementById("email");
var inp = document.getElementById("password");

input.addEventListener("input", function() {
    
    input.style.fontFamily = "russ";
    input.style.padding="10px"
    input.style.boxSizing="border-box"
    input.style.color="white";
});

inp.addEventListener("input", function() {
    inp.style.fontWeight="700";
    input.style.fontFamily = "russ";
    inp.style.padding="10px";
    inp.style.boxSizing="border-box";
    inp.style.color="white";

});


