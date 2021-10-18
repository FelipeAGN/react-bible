
// El operador rest para ser utilizado debe ser declarado como el ultimo o UNICO parametro que recibe la funcion.
const rest = (arg1, arg2, ...args) => {
    console.log(arg1, arg2)
    console.log(args)
}

rest(1,2,3)

// destructuring an object and using REST operator:

const obj = {
    a: 1, b: 2, c: 3 , d:'hi world' 
}

// destructuring::

const{a,b, ...restobject } = obj
console.log('Result of deconstructuring and rest: ' + a,b, restobject)