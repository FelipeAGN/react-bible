const arr = [1,2,3]

// spread -> ...

const fn = (a,b,c) => console.log('Caso 1: ' + a+b+c)
fn(...arr)

// Retornara la accion de la arrow function SSI: 
// - El arreglo a mapear contiene igual o más parametros de los que recibe la funcion fn

/* Ejemplo de retorno NaN*/
const fn_2 = (a,b,c,d) => {
    console.log(a,b,c,d)

    return console.log('Caso 2: ' + a+b+c+d);
}
fn_2(...arr)


// Tambien se puede utilizar para sumar dos arreglos:
// ES IMPORTANTE SABER QUE AL UTILIZAR SPREAD SE GENERA UNA COPIA. es decir
// Si se modifica un valor de 'arr', este cambio no se vera reflejado en 'arreglo_2'
const arreglo_2 = [4,5,6]
const union_arreglos = [...arr, ...arreglo_2]
console.log('union de arreglos: ' + union_arreglos)


// otro ejemplo:

const object = {
    ...arreglo_2,
    loading: true,
    data:{
        prop: 'asd',
        prop2: 'asd2'
    }
}

console.log(object)