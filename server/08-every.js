const { eachWeekOfInterval } = require("date-fns");

const numbers =  [1,30,39,29,10,13]

// Lógica de every con for()

let rta = true;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40){
    rta = false
  }
}
console.log('rta', rta)


// some()
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2)


// Reto: Evalua que todos los integrantes del equipo infantil son menores de 15 años

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 14,
  },
];

const reto = team.every(item => item.age < 15)
console.log('reto', reto)