
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

return (

  <div className='res-card' style={{backgroundColor: '#FFFEEA'}}>

<img className='res-logo' alt= "res-logo" src ={props.image}/>




<div className='res-txt'>
<h3>{props.resName}</h3>
<h4>{props.cuisine}</h4>
<h4>{props.rating}</h4>
<h4>25 min</h4>
</div>

  </div>

)


}





const Body = () =>{

return (
<div className='body'>
<div className='search'>
<button>Search</button>

</div>
<div className="res-container">

  < RestauranCard 
  image="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/fogfnatzbqcn5nytgb7e"
  resName="Brindavan" 
  cuisine="Dosa, South-Indian, Asian" 
  rating="4.6"/>
  < RestauranCard 
  image="https://lh3.googleusercontent.com/gps-cs-s/AC9h4npK3tODKGb-e6XOwIcHTZLIi4nVlTY0YUp5_miMKdSzyeuu4xbN5xEqBFeq8u-L-w8_d8DhAWCOsiMjft1CEARwqdP1TQuc5BGQOw9KfeMSsB3Oe3l5GnhJxw118hO-dhgk1aRXL-IRO1Q=s1360-w1360-h1020-rw"
  resName="Shreemaya" 
  cuisine="North-Indian, Asian" 
  rating="4.0"
  />

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





