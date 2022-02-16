// calculate area
function getValue(inputId) {
    var calculateCost = parseFloat(document.getElementById(inputId).value);
    if (calculateCost > 0) {
        return calculateCost;
    }
    else if (calculateCost < 0) {
        return alert('Please give positive amount')
    }
    else {
        return 0;
    }



}

document.getElementById('calculateBtn').addEventListener('click', function () {
    var totalIncome = document.getElementById('incomeValue');
    var totalIncomeValue = parseFloat(totalIncome.value);
    if (totalIncomeValue > 0) {
        var foodCost = getValue('foodValue');
        var rentCost = getValue('rentValue');
        var clothsCost = getValue('clothsValue');

        var totalCost = foodCost + rentCost + clothsCost;
        var totalCostView = document.getElementById('totalCost');
        totalCostView.innerText = totalCost;
        var afterCostView = document.getElementById('afterCost');
        afterCostView.innerText = totalIncomeValue - totalCost;
    }
    else if (totalIncomeValue < 0) {
        alert('I know Total income must be positive')
    }
    else {
        alert('Please give Income amount')
    }
})
// saving area
document.getElementById('saveBtn').addEventListener('click', function () {
    var afterCostView = parseFloat(document.getElementById('afterCost').innerText);
    var saveParsent = parseFloat(document.getElementById('parsentValue').value);
    var saveTk = (afterCostView * saveParsent) / 100;

    var savedView = document.getElementById('saved');
    savedView.innerText = saveTk;

    var remainingBalance = afterCostView - saveTk;
    var remainingView = document.getElementById('ramaining');
    remainingView.innerText = remainingBalance;
})