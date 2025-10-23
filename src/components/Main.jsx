import About from "../pages/About";
import {Routes , Route} from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Dishdetail from "../pages/Dishdetail";

import Navbar from "./Navbar";
import Cart from "../pages/Cart";
function Main (){
    return(
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/about" element={<About />}/>
  <Route path="/menu" element={<Menu />}/>
          <Route path="/menu/ :id" element={<Dishdetail/>}></Route>
<Route path="cart"        element={<Cart/>}/>
       
    

    </Routes>
    </>
    )
    
}
export default Main;