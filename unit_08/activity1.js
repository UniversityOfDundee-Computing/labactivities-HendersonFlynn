var inputBox = $("#Tip")[0];
var outPutBox = $("#processedTip")[0];

$("#5Percent").click(FivePercentTip);
$("#10Percent").click(TenPercentTip);
$("#25Percent").click(TwentyFivePercentTip);
$("#25PercentORTwo").click(TwentyFivePercentOrTwo);

function FivePercentTip(){
    let FivePercentValue = Math.round(parseFloat(inputBox.value)*0.05*100)/100;
    //hate jQuery
    if (FivePercentValue <= 5){
        $("#processedTip").addClass("LessThanFive", 1000, returnToNormal )  
    } else if (FivePercentValue >= 5 && FivePercentValue <= 10){
        $("#processedTip").addClass("BetweenFiveAndTen", 1000, returnToNormal ) 
    } else if (FivePercentValue >= 10){
        $("#processedTip").addClass("GreaterThanTen", 1000, returnToNormal ) }

    outPutBox.textContent = "£" + FivePercentValue;
}

function TenPercentTip(){
    let TenPercentValue = Math.round(parseFloat(inputBox.value)*0.1*100)/100;

    if (TenPercentValue <= 5){
        $("#processedTip").addClass("LessThanFive", 1000, returnToNormal )  
    } else if (TenPercentValue >= 5 && TenPercentValue <= 10){
        $("#processedTip").addClass("BetweenFiveAndTen", 1000, returnToNormal ) 
    } else if (TenPercentValue >= 10){
        $("#processedTip").addClass("GreaterThanTen", 1000, returnToNormal ) }




    outPutBox.textContent = "£" + TenPercentValue;



}

function TwentyFivePercentTip(){
    let TwentyFivePercentValue = Math.round(parseFloat(inputBox.value)*0.25*100)/100;

    if (TwentyFivePercentValue <= 5){
        $("#processedTip").addClass("LessThanFive", 1000, returnToNormal )  
    } else if (TwentyFivePercentValue >= 5 && TwentyFivePercentValue <= 10){
        $("#processedTip").addClass("BetweenFiveAndTen", 1000, returnToNormal ) 
    } else if (TwentyFivePercentValue >= 10){
        $("#processedTip").addClass("GreaterThanTen", 1000, returnToNormal ) }

    outPutBox.textContent = "£" + TwentyFivePercentValue;
}

function TwentyFivePercentOrTwo(){
    let TwentyFivePercentTip = Math.round(parseFloat(inputBox.value)*0.25*100)/100;
    let TwoPlusTenPercent = 2 + Math.round(parseFloat(inputBox.value)*0.1*100)/100;



    if (TwentyFivePercentTip > TwoPlusTenPercent){
        outPutBox.textContent = "£" + TwentyFivePercentTip;
        return;
    } else {
        outPutBox.textContent = "£" + TwoPlusTenPercent;
    }


}

function returnToNormal(){
    setTimeout(function() {
        $("#processedTip").removeClass();
    }, 1500);
}
