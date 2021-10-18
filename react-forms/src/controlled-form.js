// LA DIFERENCIA ES QUE CONTROLLED FORMS SE ENCUENTRAN SINCRONIZADOS CON LA INTERFAZ
// no es necesario presionar un boton para capturar los inputs
// SIEMPRE que hayan inputs de archivos se deberàn usar uncontrolled components, debido a que estos son de solo lectura 
// Es decir, no se requiere validar algo en la interfaz.

// EXAMPLE OF CONTROLLED COMPONENTS

import { useState } from "react"

const App = () => {
  
  const [value,setValue] = useState({ 
    normal: 'normal input', 
    texto: 'texto input', 
    select: 'udechile', 
    check: false, 
    equipo: 'cobreloa'
  })
  
  // destructuring de e (evento) y obtenemos solo la propiedad target. -- Por legibilidad de codigo --
  const handleChange = ( {target} ) => { 
    console.log(target.value, target.checked, target.type)

    setValue( (state) => ({
      ...state,
      [target.name]: target.type === 'checkbox' 
      ? target.checked 
      : target.value,
    })
    )
  }
   console.log(value)
  // Debemos pasarle un valor que va a mostrar con value
  return(
    <div>
      {value.length > 5 ? <span> long more than 5</span>: null}
      <input type='text' name='normal' value={value.normal} onChange={handleChange}></input>
      <textarea name='texto' onChange={handleChange} value={value.texto} ></textarea>

      <select value={value.select} onChange={handleChange} name='select'>
        <option value=''> -- Seleccione -- </option>
        <option value='udechile'> Universidad de Chile </option>
        <option value='colocolo'> Colo-colo </option>
        <option value='ucatolica'> Universidad Católica</option>
      </select>

      <input
        type='checkbox'
        name='check'
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label>Equipo</label>
        
        <input 
        onChange={handleChange}
        type='radio' 
        value='wanderers' 
        name='equipo' 
        checked={value.equipo === 'wanderers'}
        /> Wanderers
        
        <input 
        onChange={handleChange}
        type='radio' 
        value='everton' 
        name='equipo' 
        checked={value.equipo === 'everton'}
        /> Everton

        <input 
        onChange={handleChange}
        type='radio' 
        value='cobreloa' 
        name='equipo'
        checked={value.equipo === 'cobreloa'}
        /> Cobreloa
      </div>
    </div>

  )
}


export default App
