import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';
import '../styles/productgrid.css';
const ProductGrid = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className='product-grid'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
