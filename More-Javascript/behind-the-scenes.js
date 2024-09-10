const hobbies = ['Sports', 'Cooking'] // a pointer to the array is stored
const age = 20  // the value itself is stored
hobbies.push('Reading') //The address if the array does not change

//hobbies = ['Coding', 'Sleeping'] //Not allowed, new address is stored
console.log(hobbies)

// Primitive values : numbers, strings, booleans & more
// Reference values: Objects 

const person = { age: 20 }

function getAdultYrs(p) {
    // p.age -= 18
    // return p.age
    return p.age - 18
}

console.log(getAdultYrs(...person))
console.log(person)