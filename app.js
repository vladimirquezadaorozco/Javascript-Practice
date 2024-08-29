//Access to Input Field
let productNameInputElement = document.getElementById('product-name')
let maxAllowedChars = productNameInputElement.maxLength

let remainingChars = document.getElementById('remaining-chars')



function updateRemainingChars(event) {
    let enteredTextLength = event.target.value.length
    let remainingCharacters = maxAllowedChars - enteredTextLength

    remainingChars.textContent = remainingCharacters
}

productNameInputElement.addEventListener('input', updateRemainingChars)