
// Income-Expenses Part

document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = document.getElementById('income');
    const foodExp = document.getElementById('food');
    const rentExp = document.getElementById('rent');
    const clotheExp = document.getElementById('clothes');
    let expSum = parseInt(foodExp.value) + parseInt(rentExp.value) + parseInt(clotheExp.value);

    // Total Expenses
    let totalExp = document.getElementById('total-expenses');

    totalExp.innerText = expSum;

    // Balance
    let balance = document.getElementById('balance');

    let leftBalance = parseInt(income.value) - expSum;
    console.log(leftBalance);

    balance.innerText = leftBalance;

})


// Saving Part
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');



document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input').value;


    const extraBalanceRow = document.getElementById('balance');
    const extraBalanceFreash = parseFloat(extraBalanceRow.innerText)

    // Saving Percentage Calculation

    if (saveInput > 100) {
        return alert('Not Enough Balance')
    }
    if (isNaN(saveInput) || saveInput < 0) {
        return alert('Please Input Valid Amount In Number Format')
    }

    const savingPercentage = (extraBalanceFreash * saveInput) / 100;
    savingAmount.innerText = savingPercentage;


    // Saving Amount and Remaining Balance
    const finalremainingBalance = extraBalanceFreash - savingPercentage;
    remainingBalance.innerText = finalremainingBalance;






})

