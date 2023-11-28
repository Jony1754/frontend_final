/* eslint-disable react/prop-types */
import '../styles/productcard.css';
import { Rating } from './Rating';
const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.title} />
      <h3 className=''>{product.title}</h3>
      <p>{`${product.description.slice(0, 40)}` + `...`}</p>
      <div className='price'>
        <p className='category'> {product.category}</p>
        <p className='cost'>${product.price}</p>
      </div>
      <hr />
      <div className='rating'>
        <Rating rating={product.rating.rate} />({product.rating.count} votos)
      </div>
    </div>
  );
};

export default ProductCard;
