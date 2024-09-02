// First Example : Sum Numbers

const calculateSumButtonElement = document.getElementById('calculate-button')
console.log(calculateSumButtonElement)

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number')
    const enteredNumber = userNumberInputElement.value

    outputValue = 0

    for (let i = 0; i < enteredNumber; i++) {

    }

    console.log(enteredNumber)
}

calculateSumButtonElement.addEventListener('click', calculateSum)