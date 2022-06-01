//document.body.innerHTML="hwllooo";


let totalDeposit = 0;
let totalBet = 0;



let tableSlotsArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let balanceView = document.querySelector("#balance-label");

//Button Selectors
let addBalanceButton = document.querySelector("#add-balance");
let buttonZero = document.querySelector("#zero-btn");
let firstRow = document.querySelector("#first-row");
let secondRow = document.querySelector("#second-row");
let thirdRow = document.querySelector("#third-row");
let fourthRow = document.querySelector("#fourth-row");
let spinWheel = document.querySelector("#spin-wheel");

//Event Listeners
buttonZero.addEventListener("click", placeBet);
firstRow.addEventListener("click", placeBet);
secondRow.addEventListener("click", placeBet);
thirdRow.addEventListener("click", placeBet);
fourthRow.addEventListener("click", placeBet);

//function triggered when you press spin wheel button
spinWheel.addEventListener("click", function(){
    //let spinResult = 3;
    let spinResult = Math.floor(Math.random() * 37);
    document.querySelector("#spin-result").innerHTML=spinResult;
    checkWinnings(spinResult);
    resetTable();
})

//function triggered when you press add to balance button
addBalanceButton.addEventListener("click", function(){
    let deposit = document.getElementById("balance-text");
    let addedBalance = parseFloat(deposit.value); 
    totalDeposit += addedBalance;
    balanceView.innerHTML = totalDeposit;
});

//function called after each spin to reset the table and collect lost bets
function resetTable(){
    tableSlotsArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const tableArray = document.querySelectorAll(".slots");
    for(slot of tableArray){
        slot.innerHTML="";
    }
}

//function called when wheel is spinned to check if any bets won money
function checkWinnings(resultNumber) {
    let result = "slot" + resultNumber;
    let winningSlot = document.querySelector('#'+result);
    let depositedAmount = parseFloat(winningSlot.innerHTML);
    if(depositedAmount>0){
        totalDeposit += depositedAmount*35;
        document.querySelector("#spin-deposit").innerHTML="You won: $" + depositedAmount*35;
        document.querySelector("#balance-label").innerHTML=totalDeposit; 
    }
    
}

//function called when to place bets on a number
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

//function called to get the bet size on the winning slot
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

//checks if you have enough deposit to bet
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

//called to fetch balance
function fetchBalance(){
    let balance = document.querySelector("#balance-label");
     return parseFloat(balance.innerHTML.toString());
}






