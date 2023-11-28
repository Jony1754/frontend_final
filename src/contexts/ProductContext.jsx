import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdminView, setIsAdminView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const productsPerPage = 10;

  const updateProductInList = (updatedProduct) => {
    setAllProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    });
  };
  useEffect(() => {
    let filteredProducts = allProducts;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const startIndex = (currentPage - 1) * productsPerPage;
    setDisplayedProducts(
      filteredProducts.slice(startIndex, startIndex + productsPerPage)
    );
  }, [allProducts, currentPage, searchTerm, selectedCategory, productsPerPage]);

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        updateProductInList,
        setAllProducts,
        displayedProducts,
        currentPage,
        setCurrentPage,
        isAdminView,
        setIsAdminView,
        productsPerPage,
        categories,
        isLoading,
        setIsLoading,
        setCategories,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
