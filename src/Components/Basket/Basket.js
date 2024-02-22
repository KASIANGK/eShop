import './Basket.css';

function Basket({ basket, backProduct }) {
    const filteredBasket = basket.filter(item => item.quantity > 0)

    return (
        <div className="BASKET">
            {filteredBasket.map((product, index) => (
                <div key={index} className="BASKET-CONTENT">
                    <img src={product.image}/>
                    <p>Name: {product.name}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <button onClick={() => backProduct(product)}>BACK</button>
                </div>
            ))}
        </div>
    );
}

export default Basket
