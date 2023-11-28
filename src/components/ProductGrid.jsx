import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';
import '../styles/productgrid.css';
const ProductGrid = () => {
  const { displayedProducts } = useContext(ProductContext);

  return (
    <div className='product-grid'>
      {displayedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
