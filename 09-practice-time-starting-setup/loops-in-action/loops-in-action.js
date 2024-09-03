// First Example : Sum Numbers

const calculateSumButtonElement = document.getElementById('calculate-button')
console.log(calculateSumButtonElement)

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number')
    const enteredNumber = userNumberInputElement.value

    outputValue = 0

    for (let i = 0; i <= enteredNumber; i++) {
        outputValue += i
    }
    const outputResultElement = document.getElementById('calculated-sum')

    outputResultElement.textContent = outputValue
    outputResultElement.style.display = 'block'
}

calculateSumButtonElement.addEventListener('click', calculateSum)

//highlighy links exercise

const highlightLinksButtonElement = document.querySelector('#highlight-links button')

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a')
    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight')
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks)

//Display User data

const dummyData = {
    firstName: 'Vladimir',
    lastName: 'Quezada',
    age: 20
}

const displayUserDataButtonElement = document.querySelector('#user-data button')

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data')

    outputDataElement.innerHTML = ''

    for (const key in dummyData) {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyData[key]
        newUserDataListItemElement.textContent = outputText
        outputDataElement.append(newUserDataListItemElement)
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData)

//statistics / Roll The Dice

const rollDiceBtnElement = document.querySelector('#statistics button')

function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

function deriveNumberofDiceRolls() {
    const targetNumberInputElem = document.getElementById('user-target-number')
    const diceRollsListElem = document.getElementById('dice-rolls')

    const enteredNumber = targetNumberInputElem.value
    diceRollsListElem.innerHTML = ''

    let hasRolledTargetNum = false
    let numOfRolls = 0

    const outputTotalRollsElem = document.getElementById('output-total-rolls')
    const outputTargetNumberElem = document.getElementById('output-target-number')

    while (!hasRolledTargetNum) {
        const rolledNum = rollDice()
        // if(rolledNum == enteredNumber){
        //     hasRolledTargetNum = true
        // }

        numOfRolls++
        const newRollListElem = document.createElement('li')
        const outputText = 'Roll ' + numOfRolls + ': ' + rolledNum
        newRollListElem.textContent = outputText
        diceRollsListElem.append(newRollListElem)
        hasRolledTargetNum = rolledNum == enteredNumber
        outputTotalRollsElem.textContent = numOfRolls
    }

    outputTargetNumberElem.textContent = enteredNumber

}

rollDiceBtnElement.addEventListener('click', deriveNumberofDiceRolls)