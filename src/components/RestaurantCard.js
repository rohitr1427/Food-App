import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines = [],
    costForTwo,
    slaString,
    area,
    cloudinaryImageId,
    avgRating,
    avgRatingString,
    image
  } = resData || {};


return (

  <div className='res-card' style={{ backgroundColor: '#FFFEEA' }}>
    <div className='res-txt'>
      { (image || cloudinaryImageId) && (
        <img
        style={{ width: "100%", height: "140px" }}
        alt="food-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      ) }
      <h3>{name}</h3>
      <h4>{avgRatingString || avgRating}</h4>
      <h4>{cuisines && cuisines.length > 0 ? cuisines.join(", ") : ''}</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
      <h4>{area}</h4>
    </div>

  </div>

)


}



export default RestaurantCard;