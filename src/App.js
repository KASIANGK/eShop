import './App.css';
import { useState } from 'react';
// import Basket from './Components/Basket/Basket.js'
import Products from './Components/Products/Products.js'

function App() {
 
  const [money, setMoney] = useState(20)
  const [basket, setBasket] = useState([])
  const [products, setProducts] = useState([
    {name: 'Product 1', price: 2, stock: 5, image: '' },
    {name: 'Product 2', price: 8, stock: 3, image: '' },
    {name: 'Product 3', price: 10, stock: 1, image: '' }
  ]);


  // BUY PRODUCTS 

  function buyProduct(product) {
    if (money >= product.price && product.stock > 0) {
      setMoney(money - product.price)

      const updatedProducts = products.map((p) => {
        if (p.name === product.name) {
          return {...p, stock: p.stock - 1}
        }
        return p
      })
      setProducts(updatedProducts)
    }
  }
  


  return (

    <div className='ALL'>
      <div className='BASKET'>
        <h2>BASKET</h2>
        {money > 0 && <p>Money: {money}</p>}
      </div>
      <div className='SHOP'>
        <h1>AVAILABLE PRODUCTS</h1>
        <div className='AVAILABLE-PRODUCTS'>
          <Products product={products} buyProduct={buyProduct}/>
        </div>
      </div>
    </div>
  );
};

export default App;
