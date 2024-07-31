const totals = [1,2,3,4];

// lógica de reduce con for()
let sum = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum += element
}

console.log(sum)

const rta = totals.reduce((sum, item) => sum + item, 0);
console.log('rta',rta)





// calcular rango de elementos enntre uno y otro 

const arr = [1,2,3,4,5,6,7,8]

const reto = arr.reduce((obj, item) => {
  if(item >= 4 && item <= 6){
    obj ++ 
  }
  return obj
}, 0)

console.log(reto)