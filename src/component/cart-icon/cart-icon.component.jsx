import { useContext } from 'react';


import { CartContext } from '../../contexts/cart.context';
import { ShopIng,CartIcon,ItemCount } from './cart-icon.style';

const Cart=()=>{
    const{isCartopen,setIsCartOpen,cartCount}=useContext(CartContext)

    const toggle =()=>setIsCartOpen(!isCartopen);

    return (
        <CartIcon onClick={toggle}>
            <ShopIng className='shopping-icon'/>

            <ItemCount>{cartCount}</ItemCount>
        </CartIcon>

    )
}

export default Cart;
