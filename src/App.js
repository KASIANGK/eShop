import './App.css';
import { useState } from 'react';
import Basket from './Components/Basket/Basket.js'
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

      setBasket([...basket, product])


      const updatedProducts = products.map((p) => {
        if (p.name === product.name) {
          return {...p, stock: p.stock - 1}
        }
        return p
      })
      setProducts(updatedProducts)
    }
  }


  // BACK PRODUCTS

  function backProduct(product) {
    const updatedProducts = products.map((p) => {
      if (p.name === product.name) {
        return { ...p, stock: p.stock + 1 }
      }
      return p
    });
    setProducts(updatedProducts)


    
    let productIndex = null

    for (let i = 0; i < basket.length; i++) {
      if (basket[i].name === product.name) {
      productIndex = i
      break;
    }
  }
  
  if (productIndex !== null) {
    const updatedBasket = [...basket]
    updatedBasket.splice(productIndex, 1)
    setBasket(updatedBasket)
  }
    setMoney(money + product.price)
  }
  


  return (

    <div className='ALL'>

      <div className='BASKET-ALL'>
        <h2>BASKET</h2>
        {money > 0 && (
          <p style={{ color: money < 3 ? 'orange' : 'black' }}>Money: {money}</p>
        )}
        <Basket basket={basket} backProduct={backProduct} />
      </div>

      <div className='SHOP-ALL'>
        <h1>AVAILABLE PRODUCTS</h1>
        <div className='SHOP-CONTENT'>
          <Products product={products} buyProduct={buyProduct}/>
        </div>
      </div>
      
    </div>
  );
};

export default App;
