import { Component } from "react/cjs/react.production.min";

const styles ={
    detailCart:{
        backgroundColor : '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50
    },
    prodInCart:{
        width: '50px',
        height: '32px'
    },
    ul:{
        margin: 0,
        padding: 0

    },
    product:{
        listStyleType: 'none',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

class CartDetail extends Component{

    render(){
        const {cart} = this.props
        console.log(cart)
        return(
            <div style={styles.detailCart}>
                <ul style={styles.ul}>
                    {cart.map(prod => 
                    <li style={styles.product} key={prod.name}> 
                        {prod.name}
                        <img alt={prod.name} style={styles.prodInCart} src={prod.img}></img>
                        <span> {prod.quantity}</span>
                    </li> )}
                </ul>
            </div>
        )
    }
}

export default CartDetail