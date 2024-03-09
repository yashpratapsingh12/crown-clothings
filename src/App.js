import { Routes,Route} from 'react-router-dom';
import Home from './route/home/home.component';
import Navigation from './route/navigation/navigation.componet';
// import './categories.style.scss';
import Authentication from './route/authentication/authentication.component';
import Shop from './route/shop/shop.component';

import CheckOut from './route/checkout/checkout.component';





const App=()=> {

 return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
    
    <Route index element={<Home/>}/>
   
    <Route path='shop/*' element={<Shop/>}/>

    <Route path='auth' element={<Authentication/>}/>
    <Route path='checkout' element={<CheckOut/>}/>

    
    </Route>
  
   

 

  </Routes>

 )
 
}

export default App;
