import React, { useState } from 'react';
import './Products.css';
import bouton from '../../assets/boutonOGG.png';
import boutonEnter from '../../assets/boutonBiss.png';

function Products({ product, buyProduct, money }) {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  function imgBuy(product) {
    buyProduct(product);
  }

  return (
    <div className='CARD-OG'>
      {product.map((productItem) => (
        <div 
          key={productItem.name} 
          className={productItem.stock === 0 ? 'OUT-OF-STOCK' : (productItem.stock === 1 ? 'LOW-STOCK' : 'CARD')}
        >
          <img 
            src={productItem.image} 
            className="IMAGES-PRODUCTS" 
          />
          <h3>{productItem.name}</h3>
          <p>Price: {productItem.price}</p>
          <p>Stock: {productItem.stock}</p>
          <div className="CONTAINER-IMG">
            {productItem.stock > 0 && money >= productItem.price ? 
              <div 
                className="BTN-PIXEL-CONTAINER"
                onMouseEnter={() => handleMouseEnter(productItem)}
                onMouseLeave={handleMouseLeave}
              >
                <img 
                  src={bouton} 
                  className={`BTN-PIXEL ${hoveredProduct === productItem ? 'HIDDEN' : ''}`} 
                  onClick={() => imgBuy(productItem)}
                />
                <img 
                  src={boutonEnter} 
                  className={`BTN-PIXEL2 ${hoveredProduct !== productItem ? 'HIDDEN' : ''}`} 
                  onClick={() => imgBuy(productItem)}
                />
              </div>
              :
              <p className='PRODUCT-OUT'>CAN'T BUY</p>
            }
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
