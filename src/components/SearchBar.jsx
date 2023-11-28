import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import '../styles/searchbar.css';
const SearchBar = () => {
  const { setSearchTerm, setSelectedCategory, categories } =
    useContext(ProductContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className='search-container'>
      <input
        className='search-bar'
        type='text'
        placeholder='Search goods or services here ...'
        onChange={handleSearchChange}
      />
      <select onChange={handleCategoryChange} className='category-select'>
        <option value=''>All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button className='search-button'>Search Now!</button>
    </div>
  );
};

export default SearchBar;
