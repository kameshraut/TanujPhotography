/* theme change function start */ 

let icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="assets/theme/moon.png";
    }
    else{
        icon.src="assets/theme/sun.png";
        icon.style.marginTop="5px";
    }
}
/* theme change function end */ 