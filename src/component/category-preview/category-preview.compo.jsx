import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.style.scss';

const CategoryPreview=({title,products})=>{
    return (
        <div className='category-preview-container'>
          <h2>
            <Link className='title'to={title}>
              {title.toUpperCase()}</Link>
          </h2>
          <div className='preview'>

            {products.filter((_,idx)=>idx < 4)
            .map((production)=>(
                <ProductCard key={production.id} Pro={production}></ProductCard>
            ))}

          </div>
        </div>
        

    )
}

export default CategoryPreview;








