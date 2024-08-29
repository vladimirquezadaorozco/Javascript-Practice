//Access to Input Field
const productNameInputElement = document.getElementById('product-name')
const maxAllowedChars = productNameInputElement.maxLength

const remainingChars = document.getElementById('remaining-chars')



function updateRemainingChars(event) {
    const enteredTextLength = event.target.value.length
    const remainingCharacters = maxAllowedChars - enteredTextLength

    remainingChars.textContent = remainingCharacters
    if (remainingCharacters <= 10) {
        productNameInputElement.style.backgroundColor = 'red'
    } else {
        productNameInputElement.style.backgroundColor = 'rgb(252, 249, 233)'
    }
}

productNameInputElement.addEventListener('input', updateRemainingChars)