import { Link } from "react-router-dom";
function Navbar(){
    return(
     
        <nav>
            <Link to="/">  Home</Link>
                <Link to="/about">  about</Link>
                <Link to="/menu">  Menu</Link>
                <Link to="/cart">  cart</Link>
        
                <Link to ="/orders">  Order </Link>
        </nav>
     
    )
}
export default Navbar;