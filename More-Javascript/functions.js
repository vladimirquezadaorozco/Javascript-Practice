function greetUser(userName = 'user') {
    // console.log('Hi there ' + userName + "!")
    console.log(`Hi there ${userName}!`)
}

greetUser()
greetUser('Vlad')

function sumUp(...numbers) {
    let result = 0

    for (const number of numbers) {
        result += number
    }
    return result
}

// const inputNumbers = [5, 10, 15, 20]

// console.log(sumUp(...inputNumbers))//50

// console.log(sumUp)