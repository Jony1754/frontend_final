/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext'; // Importa el contexto
import '../styles/productcard.css';
import { Rating } from './Rating';
import { users } from '../utils/users';

const getRandomUser = () => {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
};

const ProductCard = ({ product }) => {
  const { isAdminView, setIsLoading } = useContext(ProductContext); // Usa el contexto para determinar la vista
  const [editableProduct, setEditableProduct] = useState(product); // Estado para manejar la edición
  const { updateProductInList } = useContext(ProductContext);
  const handleEdit = (e) => {
    setEditableProduct({ ...editableProduct, [e.target.name]: e.target.value });
  };

  const saveChanges = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://fakestoreapi.com/products/${editableProduct.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editableProduct),
        }
      );
      const updatedProduct = await response.json();
      console.log('Producto actualizado:', updatedProduct);
      updateProductInList(updatedProduct);
      setIsLoading(false);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  return (
    <div className={`product-card ${isAdminView ? 'edit-mode' : ''}`}>
      {isAdminView ? (
        <div>
          <input
            type='text'
            name='title'
            value={editableProduct.title}
            onChange={handleEdit}
            className='editable-field'
          />
          <textarea
            name='description'
            value={editableProduct.description}
            onChange={handleEdit}
            className='editable-textarea'
          />
          <input
            type='number'
            name='price'
            value={editableProduct.price}
            onChange={handleEdit}
            className='editable-field'
          />
          <button onClick={saveChanges} className='save-button'>
            Guardar Cambios
          </button>
        </div>
      ) : (
        <>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{`${product.description.slice(0, 40)}` + `...`}</p>
          <div className='price'>
            <p className='category'> {product.category}</p>
            <p className='cost'>${product.price}</p>
          </div>
          <hr />
          <div className='rating'>
            <Rating rating={product.rating?.rate ? product.rating.rate : 5} />
            <div className='rating-image'>
              <img src={getRandomUser().image} alt='' className='profile' />
              <p className='name'>{getRandomUser().username}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
