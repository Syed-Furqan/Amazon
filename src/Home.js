import "./Home.css"
import Product from "./Product";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://cdn.dribbble.com/users/2502409/screenshots/11422156/amazon-prime-video-redesign_4x.jpg"
                    alt=""
                />
                <div className="home__row">
                    < Product 
                        id="6536437"
                        title="New Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band" 
                        price="32,900"
                        image="https://m.media-amazon.com/images/I/71rhrO49SmL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    < Product 
                        id="2642432"
                        title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 256GB) - Space Grey (5th Generation)" 
                        price="1,04,409"
                        image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    < Product 
                        id="1234337"
                        title="LG 284 L 2 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-T302RSCY, Convertible, Scarlet Charm)" 
                        price="28,090"
                        image="https://m.media-amazon.com/images/I/61mls4lgelL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    < Product 
                        id="7136437"
                        title="LG 8 KG Fully Automatic Front Load Washing Machine(FHV1408ZWB,Black Steel)" 
                        price="35,460"
                        image="https://m.media-amazon.com/images/I/61aRERGXmFL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={3}
                    />
                    < Product 
                        id="8836437"
                        title="Logitech G 331 6 mm Wireless Gaming Headset with Flip-to-Mute Mic for Playstation 4" 
                        price="3,790"
                        image="https://m.media-amazon.com/images/I/51F635OpcQL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    < Product 
                        id="4436437"
                        title="New Apple iPhone 12 Pro Max (512GB) - Graphite" 
                        price="1,49,990"
                        image="https://m.media-amazon.com/images/I/71DVgBTdyLL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={3}
                    />
                    < Product 
                        id="13836437"
                        title="Samsung Galaxy S21 5G (Phantom Gray, 8GB, 128GB Storage)" 
                        price="64,999"
                        image="https://m.media-amazon.com/images/I/91BGpV19r0L._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    < Product 
                        id="238734"
                        title="OnePlus 9R 5G (Lake Blue, 12GB RAM, 256GB Storage)" 
                        price="40,900"
                        image="https://m.media-amazon.com/images/I/61IwksZ-DGL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    < Product 
                        id="23877734"
                        title="Samsung 163 cm (65 inches) Q Series QA65Q7FNAK 4K LED Smart TV (Black)" 
                        price="3,41,900"
                        image="https://m.media-amazon.com/images/I/81YnT2hj-HL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    < Product 
                        id="2384"
                        title="FIFA 22 (PS4)" 
                        price="3,985"
                        image="https://m.media-amazon.com/images/I/81A6hGtMGoL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    < Product 
                        id="2366684"
                        title="Far Cry 6 Yara Edition (PS4)" 
                        price="4,705"
                        image="https://m.media-amazon.com/images/I/81oB27uJbwS._AC_UY327_FMwebp_QL65_.jpg"
                        rating={3}
                    />
                    < Product 
                        id="33384"
                        title="Forza Horizon 4 (Xbox One)" 
                        price="2,600"
                        image="https://m.media-amazon.com/images/I/71MGlZZqIzL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    < Product 
                        id="2384666"
                        title="PS5 Horizon Forbidden West standard" 
                        price="4,999"
                        image="https://m.media-amazon.com/images/I/91BTDEbDxbL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    < Product 
                        id="23100023"
                        title="PS5 Battlefield 2042" 
                        price="2,407"
                        image="https://m.media-amazon.com/images/I/813IsPdQXYS._AC_UY327_FMwebp_QL65_.jpg"
                        rating={3}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;