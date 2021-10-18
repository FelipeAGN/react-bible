import { useRef } from "react";


const App = () =>{
  const ref = useRef() 
  const inputRef = useRef()
  const click = () => {
    console.log(ref.current)
  }
  const focus = () => {
    inputRef.current.focus()
  }

  return (
  
    <div>
      <input ref={inputRef}></input>
      <button onClick={focus}>Focus on input</button>
      <div onClick={click} ref={ref}> ASDASD</div>
    </div>
  )
  // Devuelve un objeto con la propiedad de current con valor nulo
  //
}




export default App