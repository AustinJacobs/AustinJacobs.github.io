function navFunction() {
    let x = document.getElementById("nav");
    let y = document.getElementById("egg-picture");
    if(x.style.display === "block") {
        x.style.display = "none";
     } else {
         x.style.display = "block";
     }

     if(x.style.display === "block") {
         y.style.marginTop = "-5.28em";
     } else {
         y.style.marginTop = "16em";
     }
}