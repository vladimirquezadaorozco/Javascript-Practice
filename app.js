//Access to Input Field
const productNameInputElement = document.getElementById('product-name')
const maxAllowedChars = productNameInputElement.maxLength

const remainingChars = document.getElementById('remaining-chars')



function updateRemainingChars(event) {
    const enteredTextLength = event.target.value.length
    const remainingCharacters = maxAllowedChars - enteredTextLength

    remainingChars.textContent = remainingCharacters
    if (remainingCharacters === 0) {
        remainingChars.classList.add('error')
        productNameInputElement.classList.add('error')
    } else if (remainingCharacters <= 10) {
        remainingChars.classList.remove('error')
        productNameInputElement.classList.remove('error')
        remainingChars.classList.add('warning')
        productNameInputElement.classList.add('warning')
    } else {
        remainingChars.classList.remove('warning')
        productNameInputElement.classList.remove('warning')

    }
}

productNameInputElement.addEventListener('input', updateRemainingChars)