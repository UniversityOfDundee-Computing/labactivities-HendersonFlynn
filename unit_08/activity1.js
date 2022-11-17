var inputBox = $("#Tip")[0];
var outPutBox = $("#processedTip")[0];

$("#5Percent").click(() => {calcTip(5)});
$("#10Percent").click(() => {calcTip(10)});
$("#25Percent").click(() => {calcTip(25)});
$("#25PercentORTwo").click(() => {calcTip(0)});
//I also have no idea if this will work, the documentation hurts my eyes.
let inputTip = 0;

$(function () {
    $("#selectable").selectable({
        stop: function () {
            let result = $("#select-result").empty();
            $(".ui-selected", this).each(function () {
                inputTip = parseFloat(inputTip) + parseFloat($(this).html().slice(1));
                //round doesn't work because variable type or something so use .toFixed
                inputTip = inputTip.toFixed(2);
                $('#Tip').html("£" + inputTip);
            })
        }
    })
})



//make a general function with a parameter because you're a coder now goddamn

function calcTip(val) {
    if (val == "5") {
        let FivePercentValue = Math.round(parseFloat(inputTip)*0.05*100)/100; 
        outPutBox.textContent = "£" + FivePercentValue;
    }
    else if (val =="10") {
        let TenPercentValue = Math.round(parseFloat(inputTip)*0.1*100)/100;
        outPutBox.textContent = "£" + TenPercentValue;
    }
    else if (val == "25") {
        let TwentyFivePercentValue = Math.round(parseFloat(inputTip)*0.25*100)/100;
        outPutBox.textContent = "£" + TwentyFivePercentValue;
    }
    else {
        let TwentyFivePercentTip = Math.round(parseFloat(inputTip)*0.25*100)/100;
        let TwoPlusTenPercent = 2 + Math.round(parseFloat(inputTip)*0.1*100)/100;

        if (TwentyFivePercentTip > TwoPlusTenPercent){
            outPutBox.textContent = "£" + TwentyFivePercentTip;
        } else {
            outPutBox.textContent = "£" + TwoPlusTenPercent;
        }
    }

    if  (val <= 5) {
        $("#processedTip").addClass("LessThanFive", 1000, returnToNormal )
    }
    else if (val >= 5 && val <= 10){
        $("#processedTip").addClass("BetweenFiveAndTen", 1000, returnToNormal ) 
    }
    else if (val >= 10) {
        $("#processedTip").addClass("GreaterThanTen", 1000, returnToNormal ) 
    }
    
}
//Jesus Christ

function returnToNormal(){
    setTimeout(function() {
        $("#processedTip").removeClass();
    }, 1500);
}
