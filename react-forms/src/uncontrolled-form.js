// EXAMPLE OF: UNCONTROLLED FORM COMPONENT

function App() {
    const submit = (e) => {
      e.preventDefault()
  
      // Para obtener los campos que se encuentran en los input. 'new FormData', el que es convertido en un array
      console.log(Array.from(new FormData(e.target)))
      const data = Array.from(new FormData(e.target))
      console.log(Object.fromEntries(data)) // Parse data as array to an object
    }
  
    return (
        <form onSubmit={submit}> 
          <div>
            <span>ASDASD</span>
            <input name='user'></input>
            <input name='password'></input>
          </div>
  
          <input type='submit' value='Send'></input>
        </form>
    )
  }
  
  export default App;
  
/* 
  import { useRef } from "react"

const App = () => {
  
  // con useRef. 1) Crear referencia 2) Se la pasamos al JSX (input en este caso) 3) Se accede mediante el hook useRef
  const input = useRef()
  const file = useRef()
  const submit = () => {
    console.log(input.current.value)
    console.log(file.current.files[0])

    // Para enviar a una API (Tambien se pueden enviar solo los objetos input,file)
    const form = new FormData()
    form.append('file', file.current.files[0])
    form.append('user', input.current.value)
    fetch('/endpoint', {method: 'POST' , body: form})
  }

  // It can be a DIV or FORM
  return(
    <div>
      <div>
        <span> ASD</span>
        <input type='text' name='user' ref={input}></input>
        <input type='file' ref={file}></input>
      </div>
      <input type='submit' value='Send' onClick={submit}></input>
    </div>
  )
}

export default App */