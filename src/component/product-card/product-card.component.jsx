import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './product-card.style.scss';

import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component"

const ProductCard=({Pro})=>{

    const{name,price,imageUrl}= Pro;
    const{addItemToCart}=useContext(CartContext);


  const addmore=()=> addItemToCart(Pro);

    // const addmor =(Pro)=>{
    //    return addItemToCart(Pro);
    // }

    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
         <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>



         </div>
         <Button buttontype={BUTTON_TYPE_CLASSES.inverted}onClick={addmore} > Add to cart</Button>



        </div>
    )
}

export default ProductCard;
