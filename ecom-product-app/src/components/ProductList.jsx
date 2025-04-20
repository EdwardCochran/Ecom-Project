import React from 'react'
import ProductItem from './ProductItem';


const ProductList = (props) => {
  return (
    <div>
      <div className='product-list'>
        {
        props.allProducts.map((product, index) => (
          <ProductItem product={product} index={index} />
          // <div key={index} className='product-item'>
          //   <h3>{product.Name}</h3>
          //    <img src={product.Image} alt={product.Name} style={{ maxHeight: '100px', maxWidth: '100px' }} />
          //   <p>Price: ${product.Price}</p>
          //   <p>{product.Description}</p>           
          // </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;