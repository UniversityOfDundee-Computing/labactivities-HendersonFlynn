var inputBox = document.getElementById("Tip");
var outPutBox = document.getElementById("processedTip");

document.getElementById("5Percent").addEventListener("click", FivePercentTip);
document.getElementById("10Percent").addEventListener("click", TenPercentTip);
document.getElementById("25Percent").addEventListener("click", TwentyFivePercentTip);

document.getElementById("25PercentORTwo").addEventListener("click", TwentyFivePercentOrTwo);


function FivePercentTip(){
    outPutBox.textContent = "£" + Math.round(parseFloat(inputBox.value)*0.05*100)/100;
}

function TenPercentTip(){
    outPutBox.textContent = "£" + Math.round(parseFloat(inputBox.value)*0.1*100)/100;
}

function TwentyFivePercentTip(){
    outPutBox.textContent = "£" + Math.round(parseFloat(inputBox.value)*0.25*100)/100;
}

function TwentyFivePercentOrTwo(){
    let TwentyFivePercentTip = Math.round(parseFloat(inputBox.value)*0.25*100)/100;
    let TwoPlusTenPercent = 2 + Math.round(parseFloat(inputBox.value)*0.1*100)/100;

    if (TwentyFivePercentTip > TwoPlusTenPercent){
        outPutBox.textContent = "£" + TwentyFivePercentTip;
        return;
    }

    outPutBox.textContent = "£" + TwoPlusTenPercent;
}
