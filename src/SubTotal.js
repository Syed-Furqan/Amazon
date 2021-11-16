import "./SubTotal.css"

const SubTotal = ({basket}) => {
    let total = 0;
    basket.forEach(item => {
        total += Number(item.price.replace(/,/g, ""));
    });

    return (
        <div className="subtotal">
            <p>Subtotal({basket?.length} items): <strong>₹: {total.toLocaleString('en-IN')}</strong></p>
            <small className="subtotal__gift">
                <input type="checkbox"/> <span>This order contains a gift</span>
            </small>
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default SubTotal;