import "./Checkout.css"
import { useStateValue } from "./StateProvider";
import SubTotal from "./SubTotal";


const Checkout = () => {
    const [{basket}] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://filmplusgear.com/wp-content/uploads/2015/10/Amazon-Prime-trial-Bodhi-Visuals-728x90-1.png"
                    alt=""
                />
                <div className="checkout__container">
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    <div className="checkout__items">
                        {basket.map(item => (
                                <div className="item" key={item.id}>
                                    <div className="item__info">
                                        <p>{item.title}</p>
                                        <p className="item__price">
                                            <small>₹</small><strong>{item.price}</strong>
                                        </p>
                                        <div className="item__rating">
                                            {item.rows}
                                        </div>
                                    </div>
                                    <img
                                        src={item.image}
                                        alt=""
                                    />
                                    <p><button>Remove from Basket</button></p>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="checkout__right">
                < SubTotal basket={basket}/>
            </div>
        </div>
    );
}

export default Checkout;