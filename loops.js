// for loop
// used to iterate while condition is not met
// in this example while i is less than 10, the loop
// will continue
for (let i = 0; i < 10; i++) {
    console.log(i)
}

const users = ['Max', 'Anna', 'Joel']
// for... of
// used to iterate of VALUES of an array (NOT indices)
for (const user of users) {
    console.log(user)
}
//object example used in for... in
const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true
}
// for... in 
// used to iterate over objects
for (const key in loggedInUser) {
    console.log(key, ':', loggedInUser[key])

}

// while loop
//