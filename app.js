function removeFunction() {
    document.getElementById("income-input").value = " ";
    document.getElementById("food-expances-input").value = " ";
    document.getElementById("rent-expances-input").value = " ";
    document.getElementById("clothes-expances-input").value = " ";
    document.getElementById("saving-input").value = " ";
    document.getElementById("expenses-output").innerText = " 000"
    document.getElementById("balance-output").innerText = "000";
    document.getElementById("remaining-balance").innerText = "000";
    document.getElementById("saving-amount").innerText = "000 ";
}

//total expanses
function calcTotalExpances() {
    const incomeInput = document.getElementById("income-input").value;
    const foodExpancesInput = document.getElementById("food-expances-input").value;
    const rentExpancesInput = document.getElementById("rent-expances-input").value;
    const clothesExpancesInput = document.getElementById("clothes-expances-input").value;
    if (foodExpancesInput < 0 || rentExpancesInput < 0 || clothesExpancesInput < 0 || incomeInput < 0) {
        // document.getElementById("expenses-output").innerText = "Please enter valid number for both income and expanses";
        alert("please enter valid number for both income and expanses");
        removeFunction()

        return;
    }

    else {
        const totalExpances = parseInt(foodExpancesInput) + parseInt(rentExpancesInput) + parseInt(clothesExpancesInput);

        document.getElementById("expenses-output").innerText = totalExpances;

        return totalExpances;
    }



}
// saving calculation
function calcSavingAmount() {
    const savingInput = document.getElementById("saving-input").value;
    const incomeInput = document.getElementById("income-input").value;

    if (savingInput > 0 && incomeInput > 0) {

        const savingAmount = parseInt(incomeInput) * parseInt(savingInput) / 100;
        document.getElementById("saving-amount").innerText = savingAmount;

        return savingAmount;
    }
    else {
        // document.getElementById("saving-amount").innerText = "please enter valid number for both income and saving"
        alert("please enter valid number for both income and saving");
        removeFunction()
        return;
    }

}

// balance calculation
function calcBalance(isExpances) {

    if (isExpances == true) {
        const incomeInput = document.getElementById("income-input").value;
        const totalExpances = calcTotalExpances();
        if (totalExpances > parseInt(incomeInput)) {

            alert("Oops! your expanses escludes you income")
            removeFunction()
            return;
            // return (document.getElementById("balance-output").innerText = "Oops! your expanses escludes you income");
        }
        else {
            const balanceAfterExpances = parseInt(incomeInput) - totalExpances;
            return balanceAfterExpances;
        }

    }
    else {
        const savingAmount = calcSavingAmount();
        const balanceOutput = document.getElementById("balance-output").innerText;
        if (savingAmount < parseInt(balanceOutput)) {
            const remainingBalance = parseInt(balanceOutput) - savingAmount;
            return remainingBalance;
        }
        else if (savingAmount > parseInt(balanceOutput)) {
            // return (document.getElementById("saving-amount").innerText = "Oops! your saving excludes your balance")
            alert("Oops! your saving excludes your balance");
            removeFunction()
            return;
        }
        else if (document.getElementById("saving-input").value < 0) {
            // return (document.getElementById("remaining-balance").innerText = "Please enter valid number for saving ")
            alert("Please enter valid number for saving ");
            removeFunction()
            return;
        }
        else if (document.getElementById("income-input").value < 0) {
            // return (document.getElementById("remaining-balance").innerText = "Please enter valid number for income ")
            alert("Please enter valid number for income ");
            removeFunction()
            return;
        }
        else {
            alert("Oops! your saving excludes your balance");
            removeFunction()
            return;
            // return (document.getElementById("remaining-balance").innerText = "Oops! your saving excludes your balance")
        }

    }

}


// button handling
document.getElementById("calculation-btn").addEventListener("click", function () {
    document.getElementById("balance-output").innerText = calcBalance(true);
})

document.getElementById("save-btn").addEventListener("click", function () {
    document.getElementById("remaining-balance").innerText = calcBalance(false);

})

