import resList from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";

const Body = () =>{

const [listOfRestaurants, setListOfRestaurants] = useState([])
const [filteredRestaurant, setFilteredRestaurant] = useState([])
const[searchText, setSearchText] = useState("");


useEffect(()=>{
    fetchData();
},[]);

const fetchData = async () => {

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0013655&lng=76.310081&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"      );

const json = await data.json();

console.log(json)




setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}











return listOfRestaurants.length === 0 ? (<Shimmer />) : (
<div className='body'>
<div className='search'>
<input type="text" className="search-box" value={searchText} onChange={(e)=>{

setSearchText(e.target.value)

}}></input>
<button onClick={()=>{

const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))


setFilteredRestaurant(filteredRestaurant)

}}>Search</button>



<button className="filter-btn" onClick={()=>{

const filterList = listOfRestaurants.filter((res) => res.info.avgRating > 4);

setListOfRestaurants(filterList)

}}>Top Rated Restaurant</button>

</div>





<div className="res-container">


{


filteredRestaurant.map((restaurant) => (< RestaurantCard key={restaurant.info?.id} resData={restaurant.info}/>))











}

  
</div>
</div>




)

}

export default Body;