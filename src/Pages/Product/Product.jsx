import React, { useContext, useState } from 'react';
import Item from "../../components/Items/Item";
import './Product.css';
import { ShopContext } from '../../context/ShopContext';

const Product = () => {
  const { data_product } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Calculate the index of the first and last product to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data_product.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when changing page
  };

  return (
    <div className='product'>
      <h1>Our Best Deals For You!</h1>
      <div className="productContainer">
        {currentProducts.map((item) => (
          <Item key={item.id} product={item} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(data_product.length / productsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;







// import React, { useContext } from 'react';
// import Item from "../../components/Items/Item";
// import './Product.css';
// import { ShopContext } from '../../context/ShopContext';

// const Product = () => {
//   const { data_product } = useContext(ShopContext);

//   return (
//     <div className='product'>
//       <h1>Our Best Deals For You!</h1>
//       <div className="productContainer">
//         {data_product.map((item) => (
//           <Item key={item.id} product={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;
// 