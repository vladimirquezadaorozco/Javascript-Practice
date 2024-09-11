const fs = require('fs/promises')

//will return promise because of async
async function readFile() {
    let fileData
    // fileData = fs.readFile('data.txt', function (error, fileData) {
    // if(error){
    //     ...
    // }
    //     console.log('File parsing done')
    //     console.log(fileData.toString())
    // })
    try {
        fileData = await fs.readFile('data.txt')
    } catch (error) {
        console.log(error)
    }
    console.log('File parsing done')
    console.log(fileData.toString())
    console.log('Hi there')
}

readFile();