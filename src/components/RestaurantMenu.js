import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resMenu from "../utils/mockMenu.js";




const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);



    useEffect(() => {
    // simulate API call
    setTimeout(() => {
      setResInfo(resMenu[0].data);
    }, 1000);
      }, []);

    

      if (resInfo === null) return <Shimmer />;

         


      const { name, cuisines, costForTwoMessage } = resInfo;




     return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h2>Menu</h2>
            <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Pasta</li>
                <li>Salad</li>
            </ul>
            {/* Menu items will be displayed here */}
        </div>
    );
};

export default RestaurantMenu;