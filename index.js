//document.body.innerHTML="hwllooo";


let totalDeposit = 0;



let balanceView = document.querySelector("#balance-label");

//Button Selectors
let addBalanceButton = document.querySelector("#add-balance");
let buttonZero = document.querySelector("#zero-btn");
let firstRow = document.querySelector("#first-row");
let secondRow = document.querySelector("#second-row");
let thirdRow = document.querySelector("#third-row");
let fourthRow = document.querySelector("#fourth-row");


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
    
    if (e.target !== e.currentTarget) {
        let clickedButtonId = e.target.id;
        let buttonId = parseInt(clickedButtonId.toString().substring(5,7));
        

        let slotFinder = "slot" + buttonId;
        alert(slotFinder);
        let slot = document.querySelector('#'+slotFinder);
        slot.innerHTML = "hiiii";
        alert(slotFinder);
       


    }
    
}



let table_slots = [
    { "slot-number":1,
        "slot-bet":0
    },
    { "slot-number":2,
        "slot-bet":0
    },
    { "slot-number":3,
        "slot-bet":0
    },
    { "slot-number":4,
        "slot-bet":0
    },
    { "slot-number":5,
        "slot-bet":0
    },
    { "slot-number":6,
        "slot-bet":0
    },
    { "slot-number":7,
        "slot-bet":0
    },
    { "slot-number":8,
        "slot-bet":0
    },
    { "slot-number":9,
        "slot-bet":0
    },
    { "slot-number":10,
        "slot-bet":0
    },
    { "slot-number":11,
        "slot-bet":0
    },
    { "slot-number":12,
        "slot-bet":0
    },
    { "slot-number":12,
        "slot-bet":0
    },
    { "slot-number":13,
        "slot-bet":0
    },
    { "slot-number":14,
        "slot-bet":0
    },
    { "slot-number":15,
        "slot-bet":0
    },
    { "slot-number":16,
        "slot-bet":0
    },
    { "slot-number":17,
        "slot-bet":0
    },
    { "slot-number":18,
        "slot-bet":0
    },
    { "slot-number":19,
        "slot-bet":0
    },
    { "slot-number":20,
        "slot-bet":0
    },
    { "slot-number":21,
        "slot-bet":0
    },
    { "slot-number":22,
        "slot-bet":0
    },

    { "slot-number":23,
        "slot-bet":0
    },

    { "slot-number":24,
        "slot-bet":0
    },

    { "slot-number":25,
        "slot-bet":0
    },

    { "slot-number":26,
        "slot-bet":0
    },

    { "slot-number":27,
        "slot-bet":0
    },

    { "slot-number":28,
        "slot-bet":0
    },

    { "slot-number":29,
        "slot-bet":0
    },

    { "slot-number":30,
        "slot-bet":0
    },

    { "slot-number":31,
        "slot-bet":0
    },

    { "slot-number":32,
        "slot-bet":0
    },

    { "slot-number":33,
        "slot-bet":0
    },

    { "slot-number":34,
        "slot-bet":0
    },

    { "slot-number":35,
        "slot-bet":0
    },

    { "slot-number":36,
        "slot-bet":0
    },

    { "slot-number":37,
        "slot-bet":0
    },

    { "slot-number":38,
        "slot-bet":0
    },

    { "slot-number":39,
        "slot-bet":0
    },

    { "slot-number":40,
        "slot-bet":0
    },
]


