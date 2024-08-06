const pets = ['cat', 'dog', 'bat'];

// Lógica de includes() con for()

let includeOnArray = false
for (let i = 0; i < pets.length; i++) {
  const element = pets[i];
  if(element === 'dog'){
    includeOnArray = true;
    break;
  }
}
console.log('includeOnArray', includeOnArray)

// includes()

const rta = pets.includes('dog');
console.log('includes', rta)