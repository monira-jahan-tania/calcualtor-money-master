
function calcTotalExpances() {
    const foodExpancesInput = document.getElementById("food-expances-input").value;
    const rentExpancesInput = document.getElementById("rent-expances-input").value;
    const clothesExpancesInput = document.getElementById("clothes-expances-input").value;
    if (foodExpancesInput < 0 || rentExpancesInput < 0 || clothesExpancesInput < 0) {
        alert("Please enter valid cost")
    }
    // else if (foodExpancesInput != "number" || rentExpancesInput != "number" || clothesExpancesInput != "number") {
    //     alert("Please enter number")
    // }
    else {
        const totalExpances = parseInt(foodExpancesInput) + parseInt(rentExpancesInput) + parseInt(clothesExpancesInput);

        document.getElementById("expenses-output").innerText = totalExpances;

        return totalExpances;
    }



}

function calcSavingAmount() {
    const savingInput = document.getElementById("saving-input").value;
    const incomeInput = document.getElementById("income-input").value;

    const savingAmount = parseInt(incomeInput) * parseInt(savingInput) / 100;
    document.getElementById("saving-amount").innerText = savingAmount;

    return savingAmount;

}

function calcBalance(isExpances) {
    if (isExpances == true) {
        const incomeInput = document.getElementById("income-input").value;
        const balanceAfterExpances = parseInt(incomeInput) - calcTotalExpances();
        return balanceAfterExpances;
    }
    else {
        const balanceOutput = document.getElementById("balance-output").innerText;
        const remainingBalance = parseInt(balanceOutput) - calcSavingAmount();
        return remainingBalance;
    }

}

document.getElementById("calculation-btn").addEventListener("click", function () {
    document.getElementById("balance-output").innerText = calcBalance(true);
})

document.getElementById("save-btn").addEventListener("click", function () {
    document.getElementById("remaining-balance").innerText = calcBalance(false);

})

