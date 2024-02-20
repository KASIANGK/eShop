import './App.css';
import { useState } from 'react';
import Basket from './Components/Basket/Basket.js'
import Products from './Components/Products/Products.js'

function App() {
 
  const [money, setMoney] = useState(20)
  const [basket, setBasket] = useState([])
  const [products, setProducts] = useState([
    {name: 'Product 1', price: 2, stock: 5, image: '', quantity: '' },
    {name: 'Product 2', price: 8, stock: 3, image: '', quantity: '' },
    {name: 'Product 3', price: 10, stock: 1, image: '', quantity: '' }
  ]);


// BUY PRODUCTS 

  function buyProduct(product) {
    
    // MONEY

    if (money >= product.price && product.stock > 0) {
      setMoney(money - product.price)

    // PRODUCTS, STOCK
      const updatedProducts = products.map((p) => {
        if (p.name === product.name) {
          return {...p, stock: p.stock - 1}
        }
        return p
      })
      setProducts(updatedProducts)
    }

    quantityBasket(product)
}



// BASKET'S QUANTITY 
function quantityBasket(product) {
  
  let basketIndex = null

  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name === product.name) {
      basketIndex = i
      break;
    }
  }

  if (basketIndex !== null) {
    const updatedBasket = [...basket]
    updatedBasket[basketIndex].quantity += 1
    setBasket(updatedBasket)
  } else {
    setBasket([...basket, { ...product, quantity: 1 }])
  }
}


// BACK PRODUCTS

//   function backProduct(product) {

//     // MONEY

//     setMoney(money + product.price)
  
//     // PRODUCTS, STOCK
//     const updatedProducts = products.map((p) => {
//       if (p.name === product.name) {
//         return { ...p, stock: p.stock + 1 }
//       }
//       return p
//     });
//     setProducts(updatedProducts)

//     //PANIER
//     let productIndex = null
//     for (let i = 0; i < basket.length; i++) {
//       if (basket[i].name === product.name) {
//       productIndex = i
//       break;
//       }
//     }



//   if (productIndex !== null) {
//     const updatedBasket = [...basket]
//     updatedBasket[productIndex].quantity -= 1
//     setBasket(updatedBasket)
//   } else {
//     setBasket([...basket, { ...product, quantity: 1 }])
//   }
// }


// BACK PRODUCT

function backProduct(product) {

    // MONEY
    const updatedMoney = money + product.price;
    if (updatedMoney <= 20) {
        setMoney(updatedMoney)
    } else {
        console.log("max money");
        return;
    }


    // PRODUCTS AND STOCK
    const updatedProducts = products.map((p) => {
        if (p.name === product.name) {
            return { ...p, stock: p.stock + 1 }
        }
        return p
    })
    setProducts(updatedProducts)

    // BASKET
    let productIndex = null;
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].name === product.name) {
            productIndex = i
            break
        }
    }

    if (productIndex !== null) {
        const updatedBasket = [...basket];

        if (updatedBasket[productIndex].quantity > 0) {
            updatedBasket[productIndex].quantity -= 1
            setBasket(updatedBasket)
        } else {
            console.log("quantity 0");
        }
    } else {
        console.log("any products");
    }
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

