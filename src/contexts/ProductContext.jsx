/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        setProducts,
        searchTerm,
        setSearchTerm,
        setCategories,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
