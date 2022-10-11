const billingAmt = document.querySelector("#billing");
const cashInput = document.querySelector("#cash-given");
const submitButton = document.querySelector("#submit-button");
const errorMsg = document.querySelector("#error-msg");
const noteNumbers = document.querySelectorAll(".no-of-notes");
const next = document.querySelector("#next-button");
const cashContainer = document.querySelector(".container-a");
const tableContainer = document.querySelector(".container-b");

const notesAvailable = [ 2000, 500, 100, 20, 10, 5, 1 ];

function checkBillingInput() {
    if (billingAmt.value > 0 || cashInput.value > 0) {
        cashContainer.style.display = "block";
        tableContainer.style.display = "block";
        errorMsg.style.display = "none";
    } else {
        errorMsg.style.display = "block";
        error("Please enter a valid positive amount");
        cashContainer.style.display = "none";
        tableContainer.style.display = "none";
    }
};

function checkCashInput() {
    if (Number(cashInput.value) >= Number(billingAmt.value)) {
        errorMsg.style.display = "none";
        tableContainer.style.display= "block";
    } else {
        errorMsg.style.display = "block";
        error("Please input valid cash Amount. Cash Amount should be greater than Bill Amount.");
        tableContainer.style.display = "none";

    }
};
function calculateNotes () {
    var amountToBeReturned = cashInput.value - billingAmt.value;
    for (let i = 0; i < notesAvailable.length; i++) {
        var noOfNotes = Math.trunc(amountToBeReturned/notesAvailable[i]);
        amountToBeReturned = amountToBeReturned % notesAvailable[i];
        noteNumbers[i].innerText = noOfNotes;
    };
    
};

function error(msg) {
    errorMsg.innerText = msg;
};
next.addEventListener("click", checkBillingInput);
submitButton.addEventListener("click", checkCashInput);
submitButton.addEventListener("click", calculateNotes);