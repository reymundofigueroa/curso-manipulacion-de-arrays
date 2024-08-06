const numbers = [1,30,49,29,10,13,'hambre']

// lógica de find() con for()

let rta = undefined;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element === 330){
    rta = element;
    break;
  }
}

console.log('rta', rta)

// find()

const rta2 = numbers.find(item => item === 300);
console.log('rta2', rta2)

// find() con objetos

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];


const rta3 = products.find(item => item.id === '🍔');
console.log('rta3', rta3)
const rta4 = products.findIndex(item => item.id === '🍔');
console.log('rta4', rta4)