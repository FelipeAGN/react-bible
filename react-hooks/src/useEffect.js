import { Component } from 'react'
import { useState, useEffect } from 'react'

const useContador = (initial) => {
  const [contador, setContador] = useState(initial)
  const incrementar = () => {
    setContador(contador + 1)
  }
  return [contador, incrementar]
}

// Para desuscribirnos de una funcion useEffect
/* const Interval = ({contador}) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000) 
    // Aqui nos desuscribimos
    return () => clearInterval(i)
  },[contador])

  return (
    <p> Interval</p>
  )
} */


// Esto es lo mismo de arriba pero en una clase
class Interval extends Component{
  
  intervalo = ''
  componentDidMount(){
    this.intervalo = setInterval( () => console.log(this.props.contador), 1000)
  }
  componentWillUnmount(){
    clearInterval(this.intervalo)
  }

  render(){
    return(
      <p> Intervalo </p>
    )
  }
}



const App = () => {  
  const [contador, incrementar] = useContador(0)
  useEffect(()=> {
    document.title = contador
  },[contador])
  
  // Regla: En useEffect el primer parametro es una funcion y el segundo puede ser un arreglo con propiedades o vacio o nada.
  // Cuando el segundo parametro es vacio, lo que ocurra en useEffect solo se ejecutará SIEMPRE cuando el componente se renderice.
  // Cuando el segundo parametro es un arreglo vacio, lo que ocurra en useEffect solo se ejecutará cuando el componente se renderice por primera vez.
  // Cuando el segundo parametro es un arreglo con propiedades, lo que ocurra en useEffect se ejecutará siempre que una de estas propiedades haya cambiado.

  return(
    <div>
      Contador: {contador}
      <button onClick={incrementar}> Incrementar</button>
      <Interval contador={contador}></Interval>
    </div>
  )
}

export default App