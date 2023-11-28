/* eslint-disable react/prop-types */
import '../styles/productcard.css';
import { Rating } from './Rating';
import { users } from '../utils/users';

const getRandomUser = () => {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
};

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
        <Rating rating={product.rating.rate} />
        <div className='rating-image'>
          <img src={getRandomUser().image} alt='' className='profile' />
          <p className='name'>{getRandomUser().username}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
