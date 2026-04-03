import resList from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";

const Body = () =>{

const [listOfRestaurants, setListOfRestaurants] = useState(resList)
const [filteredRestaurant, setFilteredRestaurant] = useState(resList)
const[searchText, setSearchText] = useState("");












return listOfRestaurants.length === 0 ? (<Shimmer />) : (
<div className='body'>
<div className='search'>
<input type="text" className="search-box" value={searchText} onChange={(e)=>{

setSearchText(e.target.value)

}}></input>
<button onClick={()=>{

const filteredRestaurant = listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()))


setFilteredRestaurant(filteredRestaurant)

}}>Search</button>



<button className="filter-btn" onClick={()=>{

const filterList = listOfRestaurants.filter((res) => res.data.avgRating > 4);

setListOfRestaurants(filterList)

}}>Top Rated Restaurant</button>

</div>





<div className="res-container">


{


filteredRestaurant.map((restaurant) => (< RestaurantCard key={restaurant.data?.id} resData={restaurant.data}/>))











}

  
</div>
</div>




)

}

export default Body;