import { createContext,useState,useEffect } from "react";


const addCartItem=(cartItem,productToAdd)=>{
    
const existingone = cartItem.find((cartItem)=>cartItem.id==productToAdd.id)


if(existingone){
    return cartItem.map((cartItem)=>
        cartItem.id==productToAdd.id ? 
        {...cartItem,quantity:cartItem.quantity+1}:cartItem
    )
}

    return [...cartItem,{...productToAdd,quantity:1}];


}


const removeCart=(cartItem,productToRemove)=>{

const existingone = cartItem.find((cartItem)=>cartItem.id==productToRemove.id)

if(existingone==1){
    return cartItem.filter(cartItem=>cartItem.id!=productToRemove.id)
}




return cartItem.map((cartItem)=>
cartItem.id==productToRemove.id ? 
{...cartItem,quantity:cartItem.quantity-1}:cartItem
)






}


const clearCart=(cartItem,productToClear)=>{
    return cartItem.filter(cartItem=>cartItem.id!=productToClear.id)


}


export const CartContext= createContext({
    isCartopen:false,
    setIsCartOpen:()=>{},

    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    clearFromCart:()=>{},



    cartCount :0,

    total:0,




})

export const CartProvider =({children})=>{
    const[isCartopen,setIsCartOpen]=useState(false);
    const[cartItems,setCartItem]=useState([]);
    const[cartCount,setCartCount]= useState(0);
   const[total,settotal] = useState(0);


    useEffect(()=>{
        const newCount= cartItems.reduce((total,cartItem)=> total+cartItem.quantity,0)

    
        setCartCount(newCount);



    },[cartItems])


    useEffect(()=>{
        const newtotal= cartItems.reduce((total,cartItem)=> total+cartItem.quantity*cartItem.price,0)

    
        settotal(newtotal);



    },[cartItems])

    
    const addItemToCart=(productToAdd)=>{
        
        
        setCartItem(addCartItem(cartItems,productToAdd));
        
        
    }

    const removeItemFromCart=(productToRemove)=>{
        
        
        setCartItem(removeCart(cartItems,productToRemove));
        
        
    }


    const clearFromCart=(productToClear)=>{
        
        
        setCartItem(clearCart(cartItems,productToClear));
        
        
    }

    const value = {isCartopen,setIsCartOpen, cartItems,addItemToCart,removeItemFromCart,clearFromCart,cartCount,total};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}