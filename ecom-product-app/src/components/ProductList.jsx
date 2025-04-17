import React from 'react'

const ProductList = (props) => {
  return (
    <div>
      <div className='product-list'>
        {
        props.allProducts.map((product, id) => (
          <div key={id} className='product-item'>
            <h3>{product.Name}</h3>
            <img src={product.Image} alt={product.Name} className='product-image' />
            <p>Price: ${product.Price}</p>
            <p>{product.Description}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;