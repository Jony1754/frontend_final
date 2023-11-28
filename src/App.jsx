import useFetchProducts from './hooks/useFetchProducts';
import SearchBar from './components/SearchBar';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';
import './App.css';
import useFetchCategories from './hooks/useFetchCategories';

const App = () => {
  useFetchProducts(); 
  useFetchCategories(); 
  return (
    <div className='app'>
      <header className='header'>
        <SearchBar />
      </header>
      <Pagination />
      <ProductGrid />
    </div>
  );
};

export default App;
