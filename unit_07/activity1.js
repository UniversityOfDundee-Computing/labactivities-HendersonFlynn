var boxes = document.getElementsByClassName("colourBox");

for (var box = 0; box < boxes.length; box++){
    boxes[box].addEventListener("mouseover", function (evt) {go(evt.currentTarget.id)})
}

function go(id){
    document.getElementById("blackBox").style.backgroundColor = id;
}

// Thank god for stackoverflow