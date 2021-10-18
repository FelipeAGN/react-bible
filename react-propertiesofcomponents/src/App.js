import { Component } from "react";

class Button extends Component {
  state = {}

  constructor(props){ 
    super(props)
    console.log('constructor', props)
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('Component updated', prevProps, prevState)
  }

  componentWillUnmount(){
    console.log('Component button desmontado', this.props, this.state)
  }

  render(){
    console.log("ASDASDAS")
    return(
      <button onClick={() => this.setState({prop: 1})}>Enviar!</button>
    )
  }
}

class App extends Component {
  // Example of managing state y pasar valores de state a componentes hijos
  state = {
    valor: 3,
  }

  /**  Metodo render se ejecuta cuando: 
   * 1) Estado del componente cambia (Ejemplo)
   * 2) Cuando el metodo render de un componente padre ejecuta el render de los hijos
  */
  render(){
    console.log(this.state)
    return (
      <div>
        <p>Hello world!</p>
        {this.state.valor === 3 ? <Button someProperty = 'someprop'/>: null}
        <button className={`${this.state.valor}`} 
                onClick={() => this.setState({valor: this.state.valor * 2})}
        >
           Send!</button>
      </div>
    )
  }
}

export default App;