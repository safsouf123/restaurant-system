


import About from "../pages/About";
import {Routes , Route} from "react-router-dom";
import Home from "../pages/Home";

import Dishdetail from "../pages/Dishdetail";

import Navbar from "./Navbar";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import Orders from "../pages/Orders";
function Main (){
    return(
    <>
    <Navbar/>
    <Routes>
         <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/menu/ :id" element={<Dishdetail/>}></Route>
<Route path="/cart"        element={<Cart/>}/>
<Route path="/orders"      Component={Orders}/>
       
    

    </Routes>
    </>
    )
    
}
export default Main;