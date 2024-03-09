import { Fragment,useContext } from "react";
import { Outlet ,Link } from "react-router-dom"
import Cart from "../../component/cart-icon/cart-icon.component";
import CartDrop from "../../component/cart-dropdown/cart-dropdown.component";

import{ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.context";

import { signOutWithUser } from "../../utils/firebase/firebase.utils";
import { NavigationContainer,NavLink,NavLinks,LogoConatiner } from "./navigation.style";





const Navigation=()=>{

  const {currentUser,setCurrentUser}=useContext(UserContext);
  const{isCartopen}= useContext(CartContext);



  const signOutHandle= async()=>{

    await signOutWithUser();
  





  }

    return(
      <Fragment>

   <NavigationContainer>

          <LogoConatiner to='/'>
         <CrwnLogo className="logo"/>
          </LogoConatiner>
          <NavLinks>
            <NavLink to='/shop'>
              shop
            </NavLink>
            {currentUser ? (
              <NavLink as='span' onClick={signOutHandle}>Signout</NavLink>
            ):(

             <NavLink to='/auth'>
              Sign-In
            </NavLink>

            )}
            <Cart/>
            
          </NavLinks>
         {isCartopen && <CartDrop/>} 
   </NavigationContainer>
      
        <Outlet/>
      </Fragment>
    )
  }


export default Navigation;
