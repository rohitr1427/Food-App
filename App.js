
import ReactDOM from 'react-dom/client'




const Header = () => {




return (


<div className="header">

<div className="logo-container">
<img className="logo" src="https://i.pinimg.com/1200x/a4/11/b6/a411b642b9926d63bee14c9e2e59f6b9.jpg" />

</div>


<div className="nav-items">


<ul>
<li>Home</li>
<li>About us</li>
<li>Contact us</li>
<li>Cart</li>


</ul>



</div>




</div>

)

}


const RestauranCard = (props)=>{


const {resData} =props;

return (

  <div className='res-card' style={{backgroundColor: '#FFFEEA'}}>






<div className='res-txt'>
<h3>{resData.data.name}</h3>
<img className='res-logo' alt= "res-logo" src ={resData.data.image}/>
<h4>{resData.data.cuisines}</h4>
<h4>{resData.data.costForTwo}</h4>
<h4>{resData.data.deliveryTime}</h4>
<h4>{resData.data.area}</h4>
</div>

  </div>

)


}


const resObj= {

type: "restaurant",
data: {
  type: "F",
  id: "334475",
  name: "KFC",
  uuid: "",
  city:"1",
  area:"Vijay Nagar",
  totalRaingsString:"500 + ratings",
  image:"/Images/kfc.jpg",
  cuisines:["Burgers", "Biriyani", "American", "Snacks", "Fast Fodd"],
  tags:[],
  costForTwo:"400 FOR TWO",
  deliveryTime:36,
  minDeliveryTime:36,
  maxDeliveryTime:36,
  slaString:"36 MINS",
  lastMileTravel:3.5,




}

  
}


const Body = () =>{

return (
<div className='body'>
<div className='search'>
<button>Search</button>

</div>
<div className="res-container">

  < RestauranCard resData={resObj}/>


</div>
</div>




)

}





const AppLayout = () => {
       
    return ( 
     <div className="app">
        < Header />
        < Body />
      </div>

      
)

}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);





