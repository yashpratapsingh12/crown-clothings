import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import './check.style.scss';
const CheckOut=()=>{
    const{cartItems,total}= useContext(CartContext)
    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
            <div className='header-block'>
                <span>product</span>
            </div>

            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>price</span>
            </div>
            <div className='header-block'>
                <span>remove</span>
            </div>


             
            </div>
            
          
      
                {
                    cartItems.map((cartItem)=>{
                        const{name,quantity,id}= cartItem;
                        return (
                            <CheckoutItem key={cartItem.id} cardItem={cartItem}/>
                        )
                    })
                }
                <span className='total'>Total : ${total}</span>
         
        </div>
    )
}

export default CheckOut;