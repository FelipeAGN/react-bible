import { Component } from "react";

const styleInput = () => ({
    backgroundColor: '#f0f0f0',
    color: '#333',
    display: 'block',
    padding: '10px 15px',
    margin: '10px 15px'
})

class Input extends Component{

/*    state = {value: ''}

     handleChange = (value) => {
        this.setState({value: value})
    } */

    render(){
        return(
            <input 
            style={{...styleInput()}}
            value={this.props.value}
            onChange = {this.props.onChange}
            >
            
            </input>
        )
    }
}


class AppComponent extends Component{
    
    /**
     * Ejemplo de levantar el estado de un componente (Value de Input a AppComponent)
     * 
     */

    state = {
        nombre: '',
        apellido: ''
    }

    updateNombre = (val) => {
        console.log(this)
        this.updateValues('nombre',val.target.value)
    }

    updateValues = (prop, value) => {
        this.setState({[prop]: value})
    }

    render(){
        return (
            <p>
                Full Name: {`${this.state.nombre}`} {`${this.state.apellido}`}
                <Input 
                value={this.state.nombre}
                onChange = {this.updateNombre}
                />
                <Input
                value={this.state.apellido}
                onChange = {e => this.updateValues('apellido',e.target.value)}
                />
            </p>
        )
    }
}

export default AppComponent;