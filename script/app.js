
// Income-Expenses Part
const foodExp = document.getElementById('food');
const rentExp = document.getElementById('rent');
const clotheExp = document.getElementById('clothes');
const totalExp = document.getElementById('total-expenses');
const balance = document.getElementById('balance');
const saveInput = document.getElementById('save-input');
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');


// Total Income & Expenses
document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = document.getElementById('income');
    const expSum = Number(foodExp.value) + Number(rentExp.value) + Number(clotheExp.value);
    if (foodExp.value < 0 || rentExp.value < 0 || clotheExp.value < 0) {
        return alert('Please Input Positive Number')
    }
    if (isNaN(income.value) || income.value < expSum) {
        return alert('Please Input Positive Number')
    }

    // Balance
    totalExp.innerText = expSum;
    let inputAmount = Number(income.value);

    if (isNaN(inputAmount) || inputAmount < 0) {
        return alert('Please Input Positive Amount In Number Format')
    }
    let leftBalance = Number(income.value) - expSum;
    balance.innerText = leftBalance;
})

// Saving Part
document.getElementById('save-btn').addEventListener('click', function () {
    const saveInputAmount = saveInput.value
    const extraBalanceRow = document.getElementById('balance');
    const extraBalanceFreash = parseFloat(extraBalanceRow.innerText)

    // Saving Percentage Calculation
    if (saveInputAmount > 100) {
        return alert('Not Enough Balance')
    }
    if (isNaN(saveInputAmount) || saveInputAmount < 0) {
        return alert('Please Input Valid Amount In Number Format')
    }
    const savingPercentage = (Number(income.value) * saveInputAmount) / 100;
    if (savingPercentage > extraBalanceRow.innerText) {
        return alert('You Have Not Enough Balance To Save')
    }
    savingAmount.innerText = savingPercentage;

    // Saving Amount and Remaining Balance
    const finalremainingBalance = extraBalanceFreash - savingPercentage;
    remainingBalance.innerText = finalremainingBalance;






})

