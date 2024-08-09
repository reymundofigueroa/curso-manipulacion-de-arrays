const elements = ['water', 'fire', 'air']

// lógica de join() con for()
let rtaFinal = ''
const separator = '--'
for (let index = 0; index < elements.length; index++) {
  const item = elements[index];
  rtaFinal = rtaFinal + item + separator
}
console.log('for', rtaFinal)
const rta = elements.join('--')
console.log('join', rta)

const title = 'Curso de manipulación de arrays';
const rta3 = title.split(' ').
console.log('rta3', rta3)