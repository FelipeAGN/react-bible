/**
 * FILTER
 */

// Ejemplo 1: Uso de filter

const arr = [0,1,2,3,4,5]
const arrayResult = arr.filter(element => element >= 2)
// console.log(arrayResult)

// Ejemplo 2: uso de indice en filter
const arrayResultWithIndex = arr.filter( (el, index) => {
    // console.log(index)
    return el > 2;
})
// console.log(arrayResultWithIndex)

/**
 * MAP
 */

const mapped = arr.map( (el) => `<h1> ${el} </h1>`)
// console.log(mapped)


/**
 * REDUCE
 */

// Primer parametro: Acumulador
// Segundo parametro: Elemento

//const reduce = arr.reduce(( acc, el) => acc + el, 0) 
// acc + el corresponde a la accion, el 0 corresponde al elemento desde donde comienza el acumulador (acc))

// Ejemplo 2:
const getMax = (a,b) => Math.max(a,b)
const reduceMax = arr.reduce(getMax,0) // nuevamente el 0 indica un valor inicial, (este podria no ir)
console.log(reduceMax)