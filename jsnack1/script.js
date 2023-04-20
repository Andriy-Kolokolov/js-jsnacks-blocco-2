const btnAddNum = document.getElementById('btn-add-number');
const fieldInputNum = document.getElementById('field-input-num');
const logOutcome = document.getElementById('log-outcome');
const arrayContent = document.getElementById('array-content')

let oddNumsArray = [];

// solution while cycle with prompt
cyclePromptSolution(6);

function cyclePromptSolution (askTimes) {
    let oddNumsArray = [];
    let i = 0;
    while (i < askTimes) {
        let numToAdd = prompt("Enter a number");
        if (numToAdd % 2 !== 0 && !isNaN(numToAdd)) {
            oddNumsArray.push(numToAdd);
            console.log("odd num added: " + numToAdd);
        }
        i++;
    }
    console.log(oddNumsArray);
}

//input field solution
btnAddNum.addEventListener("click", function (){
    let numToAdd = parseInt(fieldInputNum.value); 
    if (numToAdd % 2 !== 0 && !isNaN(numToAdd)) {
        oddNumsArray.push(numToAdd);
        logOutcome.innerText = "Odd number added to array"
        // arrayContent.innerText += numToAdd.toString() + ", ";
        arrayContent.innerText = oddNumsArray.toString();
    }
    else {
        logOutcome.innerText = numToAdd + " is not an odd number"
    }
});


