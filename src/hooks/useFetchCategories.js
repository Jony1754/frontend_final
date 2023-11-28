import { useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const useFetchCategories = () => {
  const { setCategories } = useContext(ProductContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      );
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, [setCategories]);

  return null;
};

export default useFetchCategories;
