const matriz = [
  [1, 2, 3, 4, [1, 3, 4]],
  [2, 3, 55, 3, 2],
  [5, 4, 6, 98]
];

// flat con recursividad

function flating(arr) {
  let newArray = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      newArray = newArray.concat(flating(element));
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}

console.log(flating(matriz));


const rta = matriz.flat(4)
console.log('flat', rta)