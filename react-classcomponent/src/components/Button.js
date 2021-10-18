import { Component } from "react";

const styles = {
    button:{
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '20px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}

class Button extends Component{
    render(){
        return(
            // Aqui esta recibiendo la propiedad onClick con su valor.
            <button  style={styles.button} {...this.props}>Add to cart</button>
        )
    }
}

export default Button;