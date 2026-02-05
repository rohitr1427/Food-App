import { useState } from "react";

const Header = () => {

const [btnName,setBtnNAme]=useState("Login");


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
<button className="login" onClick={()=>{

btnName === ("Login") ? setBtnNAme("Logout") : setBtnNAme("Login")


}}>{btnName}</button>

</ul>



</div>




</div>

)

}


export default Header;