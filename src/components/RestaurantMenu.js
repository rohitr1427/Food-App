import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resMenu from "../utils/mockMenu.js";
import { useParams } from "react-router-dom";



const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    
    const {resId} = useParams();
    

    useEffect(() => {
    // simulate API call
    const restaurant = resMenu.find((res) => res.id === resId);
    setResInfo(restaurant);

      }, [resId]);

    

      if (resInfo === null) return <Shimmer />;

         


      const {name, cuisines, costForTwoMessage, itemCards } = resInfo;

      


     return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <h2>Recommended</h2>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.id}>{item.name} - ₹{item.price/100}</li>
                ))}
            </ul>
            {/* Menu items will be displayed here */}
        </div>
    );
};

export default RestaurantMenu;