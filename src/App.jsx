import useFetchProducts from './hooks/useFetchProducts';
import SearchBar from './components/SearchBar';
import ProductGrid from './components/ProductGrid';
import useFetchCategories from './hooks/useFetchCategories';
import './App.css';
const App = () => {
  useFetchProducts();
  useFetchCategories();
  return (
    <div className='app'>
      <header className='header'>
        <SearchBar />
      </header>
      <ProductGrid />
    </div>
  );
};

export default App;
