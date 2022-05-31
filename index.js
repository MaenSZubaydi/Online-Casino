//document.body.innerHTML="hwllooo";


let totalDeposit = 0;
let totalBet = 0;


const tableSlotsArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let balanceView = document.querySelector("#balance-label");

//Button Selectors
let addBalanceButton = document.querySelector("#add-balance");
let buttonZero = document.querySelector("#zero-btn");
let firstRow = document.querySelector("#first-row");
let secondRow = document.querySelector("#second-row");
let thirdRow = document.querySelector("#third-row");
let fourthRow = document.querySelector("#fourth-row");
let spinWheel = document.querySelector("#spin-wheel");

spinWheel.addEventListener("click", function(){
    let spinResult = Math.floor(Math.random() * 37);
    alert(spinResult);
})

addBalanceButton.addEventListener("click", function(){
    let deposit = document.getElementById("balance-text");
    let addedBalance = parseFloat(deposit.value); 
    totalDeposit += addedBalance;
    balanceView.innerHTML = totalDeposit;
});

buttonZero.addEventListener("click", placeBet);
firstRow.addEventListener("click", placeBet);
secondRow.addEventListener("click", placeBet);
thirdRow.addEventListener("click", placeBet);
fourthRow.addEventListener("click", placeBet);

function placeBet(e){
    totalDeposit = fetchBalance();

    if (e.target !== e.currentTarget) {
        let clickedButtonId = e.target.id;
        let buttonId = parseInt(clickedButtonId.toString().substring(5,7));
        let betSize = getBetSize();
        if(checkDeposit(betSize)){
            tableSlotsArray[buttonId]+=betSize;
            let slotFinder = "slot" + buttonId;
            let slot = document.querySelector('#'+slotFinder);
            slot.innerHTML = tableSlotsArray[buttonId];
        }
    }  
}

function getBetSize(){
    const betAmountRadioButtons = document.querySelectorAll(".bet_amount_radio_group");
    let radioButtonId;
    for (const radioButton of betAmountRadioButtons){
        if(radioButton.checked){
            radioButtonId = radioButton.id;
            return parseInt(radioButtonId.toString().substring(7,10));
        }
    }

}

function checkDeposit(bet){
    if (bet>totalDeposit){
        alert("bet size exceeds deposit");
        return false;
    } else {
        totalDeposit -= bet;
        document.querySelector("#balance-label").innerHTML=totalDeposit;
        return true;
    }
}

function fetchBalance(){
    let balance = document.querySelector("#balance-label");
     return parseFloat(balance.innerHTML.toString());
}






