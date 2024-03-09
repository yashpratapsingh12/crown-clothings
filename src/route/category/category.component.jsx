import { useContext ,useState,useEffect ,Fragment} from 'react';
import { useParams } from 'react-router-dom';
import { CategoryContext } from '../../contexts/category.context';
import ProductCard from '../../component/product-card/product-card.component';
import './category.style.scss';


const Category=()=>{
    const{category}= useParams();

    const{categoryMap}= useContext(CategoryContext)

    const[products,setproduct]=useState(categoryMap[category]);

    useEffect(()=>{

        setproduct(categoryMap[category])


    },[category,categoryMap])

    return (

        <Fragment>


            <h2 className='title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
           
               { products && products.map((product)=>(
                    <ProductCard key={product.id} Pro={product}/>
                )
                     
                )}
            
        </div>
        </Fragment>
    )
  
}

export default Category;