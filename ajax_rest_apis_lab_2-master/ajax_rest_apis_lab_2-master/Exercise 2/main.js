const testNum = (num) => new Promise ((resolve, reject) => {
    if (num > 50) {
        resolve('> 50')
    } else {
        reject('< 50')
    }
})

testNum(2)
.then(function(value) {
    console.log(value)
})
.catch(function(error) {
    console.log(error)
})

testNum(202)
.then(function(value) {
    console.log(value)
})
.catch(function(error) {
    console.log(error)
})