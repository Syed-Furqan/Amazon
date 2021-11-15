import HeaderLarge from "./HeaderLarge";
import HeaderSmall from "./HeaderSmall";
import { useState, useEffect } from "react";

const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
  
      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    return width < breakpoint ? < HeaderSmall /> : <HeaderLarge />;

}

export default Header;