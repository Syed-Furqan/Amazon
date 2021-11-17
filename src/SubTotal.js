import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./SubTotal.css"

const SubTotal = () => {
    const [{basket}] = useStateValue();

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
            <Link to="/payment">
                <button className="subtotal__paymentButton">Proceed to Checkout</button>
            </Link>
        </div>
    );
}

export default SubTotal;