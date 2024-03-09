import { Routes ,Route } from 'react-router-dom';
import CategoriesPre from '../categories-pre/categories-pre.component';
import Category from '../category/category.component';
import './shop.style.scss';



const Shop=()=>{



 return(


<Routes>
<Route index element={<CategoriesPre/>}/>
<Route path=':category' element={<Category/>}/>

</Routes>


 )
}

export default Shop;

