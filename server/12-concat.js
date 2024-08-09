const elements = [1,1,2,2];
const otherElements = [3,3,4,4]

// lógica de concat() con for()

const newArray = [...elements];

for (let i = 0; i < otherElements.length; i++) {
  const element = otherElements[i];
  newArray.push(element)
  
}
console.log('for', newArray)

// lógica concat()
const rta = elements.concat(otherElements)
console.log('concat', rta);

