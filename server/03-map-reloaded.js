const orders = [
  { customerName: "Nicolas", total: 60, delivered: true },
  { customerName: "Zulema", total: 120, delivered: false },
  { customerName: "Santiago", total: 180, delivered: true },
  { customerName: "Valentina", total: 240, delivered: true },
];

console.log('original', orders)

const rta = orders.map(item => item.total)

console.log('rta', rta)


// intentamos añadir un nuevo valor a cada objeto pero sin modificar el original
// lo cual no funciona porque estamos copiando referencia a memoria y por tanto mutamos el array
// esto no applica con elementos primitivos

/*
const rta2 = orders.map(item => {
  item.tax = .19
  return tax
})

console.log('rta2', rta2)
console.log('original', orders)
*/
// aqui una solucion correcta usando el spread operator 

const rta3 = orders.map(item => {
  return {
    ...item,
    tax: 0.19
  }
})
console.log('rta3', rta3)
console.log('original', orders)

/**

El spread operator en JavaScript se representa con tres puntos (...). 
Se utiliza para expandir elementos de un array o propiedades de un 
objeto en lugares donde se esperan múltiples elementos o argumentos.

Por ejemplo:

En arrays:
JavaScript

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

En objetos:
JavaScript

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }


 */