
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


const RestauranCard = ()=>{

return (

  <div className='res-card' style={{backgroundColor: 'grey'}}>

<img className='res-logo' alt= "res-logo" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxjEfPGmdR-isxXsvYzKvwTfm8HvfNHWRdQ&s"/>

<h3>Brindavan</h3>
<h4>Dosa, South-Indian, Asian</h4>
<h4>4.6 stars</h4>
<h4>25 min</h4>
  </div>

)


}





const Body = () =>{

return (
<div className='body'>
<div className='search'>
<button>Search</button>

</div>
<div className="res-conatiner">

  < RestauranCard />
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





