const fs = require('fs/promises')

function readFile() {
    let fileData
    // fileData = fs.readFile('data.txt', function (error, fileData) {
    // if(error){
    //     ...
    // }
    //     console.log('File parsing done')
    //     console.log(fileData.toString())
    // })
    fileData = fs.readFile('data.txt')
        .then(function () {
            console.log('File parsing done')
            console.log(fileData.toString())
        })
        .then(function () { })
        .catch(function (error) {
            console.log(error)
        })

    console.log('Hi there')
}

readFile();