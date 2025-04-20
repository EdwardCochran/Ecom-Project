import React from 'react'

const ProductItem = (props) => {
  console.log(props)
  const {product, index} = props; 
  
  return (
    <div key={index} className='product-item'>
        <h3>{product.Name}</h3>
          <img src={product.Image} alt={product.Name} style={{ maxHeight: '100px', maxWidth: '100px' }} />
        <p>Price: ${product.Price}</p>
        <p>{product.Description}</p>           
      </div>
  )
}

export default ProductItem