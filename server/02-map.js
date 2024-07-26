// change an array with for (creating a new array)

const letters = ['a', 'b', 'c']

function mutatingAnArrayWithFor(){  // this function is only to separate the const newArray from the global scope
  const newArray = []
  for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element +  '++')
  }
}

 


// change an array with map() (creating a new array)

const newArray = letters.map(item => item + '++')

console.log('original' + letters);
console.log ('new' + newArray);