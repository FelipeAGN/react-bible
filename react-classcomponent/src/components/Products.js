import { Component } from "react";
import Product from "./Product";

const styles = {
    products:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

class Products extends Component{

    render(){
        const { products, addProductToCart} = this.props
        return(
            <div style={styles.products}>{products.map( product => 
            <Product
                addProductToCart = {addProductToCart}
                product = {product}
                key = {product.name}
            />)}</div>
        )
    }
}

export default Products;