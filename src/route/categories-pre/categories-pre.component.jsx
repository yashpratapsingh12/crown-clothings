import { Fragment, useContext} from "react";
// import ProductCard from "../../component/product-card/product-card.component";
import { CategoryContext } from "../../contexts/category.context";
import CategoryPreview from "../../component/category-preview/category-preview.compo";
import './categories-pre.style.scss';




const CategoriesPre=()=>{

const{categoryMap}= useContext(CategoryContext)

 return(
<Fragment>


    {Object.keys(categoryMap).map((title)=>{
    
      const product = categoryMap[title];
      return (
    
      <CategoryPreview key={product.id} title={title} products={product}></CategoryPreview>
      )
    })}
    
    
    
    
    
</Fragment>
     )
  
}

export default CategoriesPre;

