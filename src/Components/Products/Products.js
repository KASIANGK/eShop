import React, { useState } from 'react';
import './Products.css'
import bouton from '../../assets/boutonOGG.png'
import boutonEnter from '../../assets/boutonBiss.png'

function Products({ product, buyProduct, money}) {
  const [clickedProduct, setClickedProduct] = useState(null);

  const handleButtonClick = (product) => {
    setClickedProduct(product)
    buyProduct(product); 

    setTimeout(() => {
      setClickedProduct(null);
    }, 300);
  };

  return (
    <div className='CARD-OG'>
      {product.map((product) => (
        <div 
          key={product.name} 
          className={product.stock === 0 ? 'OUT-OF-STOCK' : (product.stock === 1 ? 'LOW-STOCK' : 'CARD')}
        >
          <img 
            src={product.image} 
            className="IMAGES-PRODUCTS" 
          />
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>Stock: {product.stock}</p>
          {product.stock > 0 && money >= product.price ? 
            <img 
              src={clickedProduct === product ? boutonEnter : bouton} 
              className='BTN-PIXEL' 
              onClick={() => handleButtonClick(product)}
            /> :
            <p className='PRODUCT-OUT'>CAN'T BUY</p>
          }
        </div>
      ))}
    </div>
  );
};

export default Products;
