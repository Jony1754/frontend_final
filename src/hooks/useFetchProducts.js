import { useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const useFetchProducts = () => {
  const { setProducts, searchTerm, selectedCategory } =
    useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      let url = 'https://fakestoreapi.com/products';
      if (selectedCategory) {
        url += `/category/${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if (searchTerm) {
        setProducts(
          data.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, [
    searchTerm,
    selectedCategory,
    setProducts /* eslint-disable-line react-hooks/exhaustive-deps */,
  ]);

  return null;
};

export default useFetchProducts;
