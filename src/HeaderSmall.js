import "./HeaderSmall.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

const HeaderSmall = () => {
    let [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
            dispatch({
                type: 'EMPTY'
            });
        }
    }

    return (
        <div className="headerSmall">
            <div className="headerSmall__logo-search">
                <Link to="/">
                    <img
                        className="header__logo" 
                        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                        alt="amazon-logo"
                    />
                </Link>
                <div className="header__search">
                    <input className="header__searchInput" type="text"/>
                    < SearchIcon className="header__searchIcon"/>
                </div>
            </div>
            <div className="headerSmall__nav">
                <Link to={(!user && "/login") || "/"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLine1">{user ? user?.email : "Guest"}</span>
                        <span className="header__optionLine2">
                            {user ? "Sign Out" : "Sign In"}
                        </span> 
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLine1">Returns</span>
                    <span className="header__optionLine2">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLine1">Your</span>
                    <span className="header__optionLine2">Prime</span>
                </div>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    < ShoppingBasketIcon />
                    <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>  
        </div>
    );
}

export default HeaderSmall;