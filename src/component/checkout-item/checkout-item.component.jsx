import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.style.scss';
// import CartItem from '../cart-items/cart-items.component';
const CheckoutItem=({cardItem})=>{
 
    const {name,imageUrl,quantity,price}= cardItem;
    
    const{clearFromCart,addItemToCart,removeItemFromCart}=useContext(CartContext)

    const clearHandle=()=>clearFromCart(cardItem)
    const addHanlde=()=>addItemToCart(cardItem)
    const remHandle=()=>removeItemFromCart(cardItem)

    return (


        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={remHandle}>
                    &#10094;
                </div>


            <span className='value'>{quantity}</span>    
                
                <div className='arrow' onClick={addHanlde}>
                &#10095;
                </div>


                </span>

            <span className='price'>${price}</span>

            <div className='remove-button' onClick={clearHandle}>&#10005;</div>


        </div>

    )

}


export default CheckoutItem;