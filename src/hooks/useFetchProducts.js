import { useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const useFetchProducts = () => {
  const {
    setAllProducts,
    setDisplayedProducts,
    currentPage,
    productsPerPage,
    searchTerm,
    selectedCategory,
  } = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      let url = 'https://fakestoreapi.com/products';
      if (selectedCategory) {
        url += `/category/${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();

      const filteredData = searchTerm
        ? data.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : data;

      setAllProducts(filteredData);
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      setDisplayedProducts(filteredData.slice(startIndex, endIndex));
    };

    fetchProducts();
  }, [
    searchTerm,
    selectedCategory,
    currentPage,
    productsPerPage,
    setAllProducts,
    setDisplayedProducts,
  ]);

  return null;
};

export default useFetchProducts;
