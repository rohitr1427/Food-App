
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

const AppLayout = () => {
       
    return ( 
     <div className="app">
        < Header />

      </div>
)

}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);





