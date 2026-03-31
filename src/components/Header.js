import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

const [btnName,setBtnNAme]=useState("Login");


return (


<div className="header">

<div className="logo-container">
<img className="logo" src="https://i.pinimg.com/1200x/a4/11/b6/a411b642b9926d63bee14c9e2e59f6b9.jpg" />

</div>


<div className="nav-items">


<ul>
<li>
    <Link to={"/"}>Home</Link></li>
<li>
    <Link to={"/about"}>About us</Link></li>
<li>
    <Link to={"/contact"}>Contact us</Link></li>
<li>
    <Link>Cart</Link></li>
<button className="login" onClick={()=>{

btnName === ("Login") ? setBtnNAme("Logout") : setBtnNAme("Login")


}}>{btnName}</button>

</ul>



</div>




</div>

)

}


export default Header;