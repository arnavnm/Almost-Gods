import CartItem from './CartItem';
import cartItemType from "./Products"
import { Image } from 'react-bootstrap';




const Cart = 
( {cartProducts, addToCart, removeFromCart}) => 
{


   
    return (
        <div style = {{height: "100%", textAlign: "center"}}>
            <h1>Your Shopping Cart</h1>
            {cartProducts.length === 0 ? 
            
            (
              <>
            <p>Your cart is empty</p> 
            <Image src ="https://freesociety.in/media/logo.png"/>
            </>
           ) : 
            
            (
            
            cartProducts?.map(item => (
        <CartItem
          
          item={item}
          addToCart={addToCart}
          removeFromCart = {removeFromCart}
        />
      )))
            
            }
            
        </div>
    )
}

export default Cart
