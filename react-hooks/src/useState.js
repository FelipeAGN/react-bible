import { useState } from 'react'

const useContador = (initial) => {
  const [contador, setContador] = useState(initial)
  const incrementar = () => {
    setContador(contador + 1)
  }
  return [contador, incrementar]
}

const App = () => {  
  const [contador, incrementar] = useContador(0)
  return(
    <div>
      Contador: {contador}
      <button onClick={incrementar}> Incrementar</button>
    </div>
  )
}

export default App