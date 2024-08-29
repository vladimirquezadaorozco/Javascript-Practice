let paragraphElement = document.querySelector('p')

function changeParagraphText() {
    paragraphElement.textContent = 'You Clicked!'
}

paragraphElement.addEventListener('click', changeParagraphText)

let inputElement = document.querySelector('input')

function retrieveUserInput() {
    let enteredText = inputElement.value
    console.log(enteredText)
}

inputElement.addEventListener('input', retrieveUserInput)