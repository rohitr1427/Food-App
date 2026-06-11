import { useEffect } from "react";
import { useState } from "react";
import resMenu from "../utils/mockMenu.js";
import { useParams } from "react-router-dom";


const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
    // simulate API call
    const restaurant = resMenu.find((res) => res.id === resId);
    setResInfo(restaurant);

      }, []);


        return resInfo;
    };

export default useRestaurantMenu;