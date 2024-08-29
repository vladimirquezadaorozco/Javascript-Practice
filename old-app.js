// document.body.children[1].children[0].href = 'https://google.com'


let anchorElement = document.getElementById('external-link')
anchorElement.href = 'https://amazon.com'

anchorElement = document.querySelector('a') // a { color : red }
anchorElement.href = 'https://academind.com'

let newAnchorElement = document.createElement("a")
newAnchorElement.href = "https://udemy.com"
newAnchorElement.textContent = "This link leads to UDEMY!"

let firstParagraph = document.querySelector('p')

firstParagraph.append(newAnchorElement)

//remove element

let firsH1Element = document.querySelector('h1')

firsH1Element.remove()

// firsH1Element.parentElement.removeChild(firsH1Element)


//Move Elements

firstParagraph.parentElement.append(firstParagraph)

//innerHTML

firstParagraph.innerHTML = "Hi! this is <strong>important</strong>"