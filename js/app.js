// calculate input value 
function getValue(inputId) {
    var calculateCost = document.getElementById(inputId);
    var calculateCostTk = parseFloat(calculateCost.value);
    if (!isNaN(calculateCostTk) && calculateCostTk > 0) {
        return calculateCostTk;
    }
    else if (calculateCostTk < 0) {
         alert('Please give positive/valid amount.');
    }
    else if (isNaN(calculateCostTk)) {
         alert('Letter or word is not supported please give valid amount.');
    }
    return 0;
}

// calculter button with eventlistener
document.getElementById('calculateBtn').addEventListener('click', function () {

    var totalIncome = getValue('incomeValue');

    // total cost calculate
    var foodCost = getValue('foodValue');
    var rentCost = getValue('rentValue');
    var clothsCost = getValue('clothsValue');
    var totalCost = foodCost + rentCost + clothsCost;

    // balance after cost
    if(isNaN(totalIncome)){
        alert(' please give me valid account')
    }
    else if (totalIncome > totalCost ) {
        var totalCostBalance = document.getElementById('totalCost');
        totalCostBalance.innerText = totalCost;

        var afterCostBalance = document.getElementById('afterCost');
        afterCostBalance.innerText = totalIncome - totalCost;
    }
    else {
        return alert('Your Cost is too much  but income is too poor');
    }

})


// saving area
document.getElementById('saveBtn').addEventListener('click', function () {
    var totalIncometk = getValue('incomeValue');
    var saveParsent = getValue('parsentValue');

    var afterCostBalance = document.getElementById('afterCost');
    var afterCostBalanceTk = parseFloat(afterCostBalance.innerText);

    // save tk by persentese
    var saveTk = (totalIncometk * saveParsent) / 100;
    var savedTk = document.getElementById('saved');

    // saving and remaining
    if (saveTk <= afterCostBalanceTk) {
        savedTk.innerText = saveTk;
        var remainingBalance = afterCostBalanceTk - saveTk;
        var updateRemainingBalance = document.getElementById('ramaining');
        updateRemainingBalance.innerText = remainingBalance;
    }
    else {
        return alert('saving is not possible your balance is low ')
    }

})

