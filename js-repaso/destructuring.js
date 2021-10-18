// Example1 :

const arr = [ 1,2,3,4,5]
const [a,b, ...restOperatorVariable] = arr;
console.log('Result ex.1: ' + a,b,restOperatorVariable)


// Example2 : Destructuring a value and anonymous function
const useState = () => ['valor', () => {}]
const [valor, setValue] = useState();
console.log('Result ex.2: ' + valor, setValue)