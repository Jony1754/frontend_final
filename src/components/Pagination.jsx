import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import '../styles/pagination.css';
const Pagination = () => {
  const { currentPage, setCurrentPage, allProducts, productsPerPage } =
    useContext(ProductContext);

  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  return (
    <div className='pagination'>
      <div className='pagination-green-box'></div>
      <p className='pagination-text'>Latest Online Products</p>
      <div className='buttons'>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
