/* Ways to declare variables */

// Lleva la inicializacion de la variable al comienzo del archivo. 
// Si es utilizada antes de haber asignado un valor, el resultado sera undefined.
var miVariable = 'asd con var'

// La incializacion de la variable ocurre en la declaracion.
// Si es utilizada antes de ser declarada y asignada, el resultado sera un error.
let variable = 'asd con let'

// Es la declaracion de una variable que no puede cambiar. Si se cambia el valor se genera un error.
// Ej: linea 14
const constante = 'asd as constant'

// Genera error constante = 111

console.log(miVariable)
console.log(constante)
