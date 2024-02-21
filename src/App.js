import './App.css';
import { useState } from 'react';
import Basket from './Components/Basket/Basket.js'
import Products from './Components/Products/Products.js'
import videoGameboy from '../src/assets/OKOK.mp4'
import gamePurple from './assets/gamePrurple.png'
import Navbar from './Components/Navbar/Navbar'
import gameOG from '../src/assets/gameOG.png'
import gameP from '../src/assets/gameP.png'
import Modal from 'react-modal';
import BtnCircle from '../src/assets/circle.PNG'
import BtnCircle2 from '../src/assets/BtnCircle2.png'
import RedGame from '../src/assets/redG.png'
import GreyGame from '../src/assets/GameGrey.png'
import Advance from '../src/assets/Advance.png'
import GameBleu from '../src/assets/GameBleu.png'
import RG from '../src/assets/RG.png'

function App() {
 
  const [money, setMoney] = useState(20)
  const [basket, setBasket] = useState([])
  const [products, setProducts] = useState([
    {id: 1, name: 'Product 1', price: 2, stock: 5, image: gameOG, quantity: '' },
    {id: 2, name: 'Product 2', price: 8, stock: 0, image: Advance, quantity: '' },
    {id: 3, name: 'Product 3', price: 10, stock: 1, image: gameP, quantity: '' },
    {id: 4, name: 'Product 4', price: 2, stock: 5, image: RG, quantity: '' },
    {id: 5, name: 'Product 5', price: 8, stock: 3, image: GreyGame, quantity: '' },
    {id: 6, name: 'Product 6', price: 10, stock: 1, image: GameBleu, quantity: '' }
  ]);
  

  //MODAL
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



// BUY PRODUCTS 

function buyProduct(product) {
    if (money >= product.price && product.stock > 0) {
        setMoney(money - product.price);

        const updatedProducts = products.map((p) => {
            if (p.id === product.id) {
                return { ...p, stock: p.stock - 1 };
            }
            return p;
        });
        setProducts(updatedProducts);
        quantityBasket(product);
    } else {
        console.log("not enough money");
    }
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
        if (p.id === product.id) {
            return { ...p, stock: p.stock + 1 }
        }
        return p
    })
    setProducts(updatedProducts)

    // BASKET
    const updatedBasket = basket.map((item) => {
        if (item.id === product.id && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
    });

    setBasket(updatedBasket);
}

  

  return (
        <div className='ALL'>
            <Navbar />
            <video autoPlay muted loop id="GAEMBOY" style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
                top: 0
            }}>
                <source src={videoGameboy} type="video/mp4" />
            </video>

            <div className='BASKET-ALL'>
                <div className='BASKET-TITLE'>
                    <h2>BASKET</h2>
                    {money > 0 && (
                        <p style={{ color: money < 3 ? 'orange' : 'white' }}>Money: {money}</p>
                    )}
                </div>
                <img src={BtnCircle} className='BTN-OPEN' onClick={openModal}/>
            </div>

            <div className='SHOP-ALL'>
                <h1 className='TITLE'>AVAILABLE PRODUCTS</h1>
                <div className='SHOP-CONTENT'>
                    <Products product={products} buyProduct={buyProduct} />
                </div>
            </div>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                <div className='MODAL'>
                    <Basket basket={basket} backProduct={backProduct} />
                </div>
                <img src={BtnCircle2} className='BTN-CLOSE' onClick={closeModal}></img>
            </Modal>
        </div>
    );
}

export default App;

