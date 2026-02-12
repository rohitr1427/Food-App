import resList from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";

const Body = () =>{

const [listOfRestaurants, setListOfRestaurants] = useState([])

const[searchText, setSearchText] = useState("");


useEffect(()=>{
    fetchData();
},[]);

const fetchData = async () => {

    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1"      );

const json = await data.json();


console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);



setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}









if(listOfRestaurants.length === 0){

    return <h1><Shimmer /></h1>
}

return (
<div className='body'>
<div className='search'>
<input type="text" className="search-box" value={searchText} onChange={(e)=>{

setSearchText(e.target.value)

}}></input>
<button onClick={()=>{

const filteredRestaurant = listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()))


setListOfRestaurants(filteredRestaurant)

}}>Search</button>



<button className="filter-btn" onClick={()=>{

const filterList = listOfRestaurants.filter((res) => res.data.avgRating > 4);

setListOfRestaurants(filterList)

}}>Top Rated Restaurant</button>

</div>





<div className="res-container">


{


listOfRestaurants.map((restaurant) => (< RestaurantCard key ={restaurant.data.id} resData = {restaurant}/>))











}

  
</div>
</div>




)

}

export default Body;