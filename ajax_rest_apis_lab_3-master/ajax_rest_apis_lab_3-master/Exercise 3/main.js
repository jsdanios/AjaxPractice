let fruit = ['apple', 'banana', 'strawberry', 'orange', true]; 

const makeAllCaps = (arr) => 
  new Promise ((resolve, reject) => {
    if (arr.every(arr => typeof arr === 'string')){
      resolve(arr.map(arr => arr.toUpperCase()))
    } else {
      reject(Error('not a string'))
    }
  })

const sortWords = (arr) => {
  return arr.sort((a, b) => {
    if (a > b){
      return 1
    } else {
      return -1
    }
  })
}

makeAllCaps(arr)
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))