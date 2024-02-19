import './App.css';
import { useState } from 'react';

function App() {
 
  const [money, setMoney] = useState(20)
  const [basket, setBasket] = useState([])
  const [products] = useState([
    { nom: 'Product 1', price: 5, stock: 5, img: '' },
    { nom: 'Product 2', price: 8, stock: 3, img: '' },
    { nom: 'Product 3', price: 10, stock: 0, img: '' }
  ]);


  return (
    <div className='OG'>
      <h1>Mon eShop</h1>
    </div>
  );
};

export default App;
