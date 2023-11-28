import useFetchProducts from './hooks/useFetchProducts';
import SearchBar from './components/SearchBar';

import { useContext } from 'react';
import { ProductContext } from './contexts/ProductContext';
import Loading from './components/Loading';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';
import './App.css';
import useFetchCategories from './hooks/useFetchCategories';

const App = () => {
  useFetchProducts();
  const { setIsAdminView } = useContext(ProductContext);
  const { isLoading } = useContext(ProductContext);
  const toggleAdminView = () => {
    setIsAdminView((prev) => !prev);
  };
  useFetchCategories();

  if (isLoading) return <Loading />;

  return (
    <div className='app'>
      <header className='header'>
        <SearchBar />
        <button className='admin-button' onClick={toggleAdminView}>
          Switch ADMIN
        </button>
      </header>
      <Pagination />
      <ProductGrid />
    </div>
  );
};

export default App;
