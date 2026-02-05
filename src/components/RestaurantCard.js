
const RestaurantCard = (props)=>{


const {resData} =props;


const {
name,
cuisines,
costForTwo,
deliveryTime,
area,
image,
avgRating,

}= resData?.data


return (

  <div className='res-card' style={{backgroundColor: '#FFFEEA'}}>






<div className='res-txt'>

<img className='res-logo' alt= "res-logo" src ={image}/>
<h3>{name}</h3>
<h4>{avgRating}</h4>
<h4>{cuisines.join(", ")}</h4>
<h4>{costForTwo}</h4>
<h4>{deliveryTime} minutes</h4>
<h4>{area}</h4>

</div>

  </div>

)


}



export default RestaurantCard;