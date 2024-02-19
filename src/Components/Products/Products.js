import React from 'react';
import './Products.css'

function Products({product, buyProduct}) {
  return (
    <div className='CARD-OG'>
      {product.map((product) => (
        <div 
        key={product.name} 
        className={product.stock === 0 ? 'OUT-OF-STOCK' : (product.stock === 1 ? 'LOW-STOCK' : 'CARD')}>
          <img src={product.image} />
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>Stock: {product.stock}</p>
          {product.stock > 0 && (
            <button onClick={() => buyProduct(product)}>BUY</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
