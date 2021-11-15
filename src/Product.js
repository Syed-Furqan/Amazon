import "./Product.css"

const Product = ({id, title, image, price, rating}) => {
    const rows = [];

    for(let i = 0; i<rating; i++){
        rows.push(<span>⭐</span>);
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
            <button>Add to Basket</button>
        </div>
    )
}

export default Product;