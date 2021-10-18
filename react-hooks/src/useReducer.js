import { useReducer, useState } from "react";

// Definir una estructura de datos que va a definir el estado

const initialState = {
  contador : 0
}

// Para utilizar useReducer necesitamos una funcion reducer
// action siempre es un objeto con propiedad type de string, de manera opcional puede tener un payload de tipo any
// ejemplo::   action = {type: string, payload: any}
const reducer = ( state, action) => {
  switch(action.type){
    case 'incrementar':
      return {contador: state.contador ++}
    case 'decrementar':
      return {contador: state.contador --}
    case 'set':
      return {contador: action.payload}
  }
}

const App = () => {
  // Este hook retorna un arreglo similar a useState

  // Dispatch son eventos que tienen forma de action -> prop type y payload
  const [state , dispatch] = useReducer(reducer, initialState)
  const [value, setValor] = useState(0)
  return(
    <div> 
      Contador: {state.contador}
      <input value={value} onChange={ e => setValor(e.target.value)}/>
      {/* Aqui despacharemos un objeto literal, con un action*/}
      <button onClick= {() => dispatch({ type:'incrementar'})} > Incrementar</button>
      <button onClick= {() => dispatch({ type:'decrementar'})} > Decrementar</button>
      <button onClick= {() => dispatch({ type:'set', payload: value})} > Set</button>
    </div>
    
  )
}

export default App