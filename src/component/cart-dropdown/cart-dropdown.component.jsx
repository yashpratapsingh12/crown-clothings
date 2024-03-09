import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-items/cart-items.component';

import Button from '../button/button.component';
import {CartDropDownContainer,EmptyMessage,CartIt} from './cart-dropdown.style';



const CartDrop=()=>{
    const{cartItems}= useContext(CartContext);

    const navigate = useNavigate();

    const gotocheck=()=>{
        navigate('/checkout')
    }

    return (
        <CartDropDownContainer>
           <CartIt>
            {
                cartItems.length ?(
                cartItems.map((items)=>(<CartItem key={items.id} cartItem={items}/>))):(
                    <span>Your cart is empty</span>
                )
            }
           </CartIt>
           <Button onClick={gotocheck}>To check out </Button>
        </CartDropDownContainer>
    )
}

export default CartDrop;
