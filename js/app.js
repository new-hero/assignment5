// calculate area
function getValue(inputId) {
    var calculateCost = document.getElementById(inputId);
    var calculateCostTk = parseFloat(calculateCost.value);


    if (calculateCostTk > 0) {
        return calculateCostTk;
    }
    else if (calculateCostTk<0){
        return alert('letter or Negative amount not accept');
    }
    else {
        return 0;
    }



}

document.getElementById('calculateBtn').addEventListener('click', function () {
    var totalIncome = document.getElementById('incomeValue');
    var totalIncomeValue = parseFloat(totalIncome.value);

    if (totalIncomeValue < 0) {
        return alert('Income amount must be Positive')
    }
    else if (isNaN(totalIncomeValue)) {
        return alert('String or letter not accepted')
    }
    else {
        var foodCost = getValue('foodValue');
        var rentCost = getValue('rentValue');
        var clothsCost = getValue('clothsValue');

        var totalCost = foodCost + rentCost + clothsCost;
        var totalCostView = document.getElementById('totalCost');
        totalCostView.innerText = totalCost;
        var afterCostView = document.getElementById('afterCost');
        afterCostView.innerText = totalIncomeValue - totalCost;
    }
})




// saving area
document.getElementById('saveBtn').addEventListener('click', function () {
    var afterCostView = parseFloat(document.getElementById('afterCost').innerText);
    var saveParsent = getValue('parsentValue');


    if (afterCostView > saveParsent) {
        var saveTk = (afterCostView * saveParsent) / 100;

        var savedView = document.getElementById('saved');
        savedView.innerText = saveTk;

        var remainingBalance = afterCostView - saveTk;
        var remainingView = document.getElementById('ramaining');
        remainingView.innerText = remainingBalance;

    }
    else {
        return alert("You must Need sufficient Balance");
    }



})