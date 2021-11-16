import "./Product.css"
import { useStateValue } from "./StateProvider";

const Product = ({id, title, image, price, rating}) => {

    const rows = [];
    for(let i = 0; i<rating; i++){
        rows.push(<span key={i}>⭐</span>);
    }

    const [, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small><strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {rows}
                </div>
            </div>
            <img
                src={image}
                alt=""
            />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;