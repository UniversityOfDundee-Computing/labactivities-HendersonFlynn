document.getElementById("boxRed").addEventListener("mouseover", go('red'));
document.getElementById("boxOrange").addEventListener("mouseover", go('orange'));
document.getElementById("boxYellow").addEventListener("mouseover", go('yellow'));
document.getElementById("boxLime").addEventListener("mouseover", go('#7ed433'));
document.getElementById("boxGreen").addEventListener("mouseover", go('#2b8a4c'));
document.getElementById("boxCyan").addEventListener("mouseover", go('#34ebcd'));
document.getElementById("boxLightBlue").addEventListener("mouseover", go('#34ebe8'));
document.getElementById("boxDarkBlue").addEventListener("mouseover", go('#348feb'));


function go(colourParam) {
    document.getElementById('blackbox').style.backgroundColor = colourParam;
}