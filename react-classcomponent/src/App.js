import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout'
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component{
  
  state = {
    products: [
      { name: 'Tomato', price: 10 , img: '/products/tomate.jpg'},
      { name: 'Alberjas', price: 15 , img: '/products/arbejas.jpg'},
      { name: 'Lechugas', price: 5 , img: '/products/lechuga.jpg'}
    ],
    cart: [],
    isCartVisible: false,
  }

  addProductToCart = (product) => {    

    const {cart} = this.state
  
    // Case 1: The product that is being added, already is on cart
    if(cart.find( prodInCart => prodInCart.name === product.name)){
      const newCart = cart.map(
        prodInCart => prodInCart.name === product.name? 
        ({
          ...prodInCart,
          quantity: prodInCart.quantity+ 1,
        }) 
        : prodInCart
      )
      return this.setState({cart: newCart})
    }

    // Case 2: The product that is being added, is not in the cart
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      })
    })

  }

  showCart = () =>{
    if(!this.state.cart.length){
      return
    }
    this.setState({isCartVisible : !this.state.isCartVisible})
  }

  render(){
    // console.log(this.state.cart)
    const {isCartVisible} = this.state

    return(
      <div>
        <Navbar 
        cart={this.state.cart}
        isCartVisible = {isCartVisible}
        showCart = {this.showCart}
        />

        <Layout>
          <Title/>
          <Products 
            addProductToCart={this.addProductToCart}
            products = {this.state.products}>
          </Products>

        </Layout>
      </div>
    )
  }
}

export default App;
