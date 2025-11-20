


import About from "../pages/About";
import {Routes , Route} from "react-router-dom";
import Home from "../pages/Home";
import { useState } from "react";
import Dishdetail from "../pages/Dishdetail";

import Navbar from "./Navbar";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import Orders from "../pages/Orders";
import Contact from "../pages/Contact";
function Main (){
    const [cartitems , setcartitems] = useState([]);
    function handleaddtocart(item){
        setcartitems((previtems) => [...previtems,item]);
    }
    return(
    <>
    <Navbar/>
    <Routes>
         <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}/>
          <Route path="/menu" element={<Menu onAddtocart={handleaddtocart}/>}/>
   <Route path="/menu/:id" element= {<Dishdetail onAddtocart={handleaddtocart}/>}></Route>
<Route path="/cart"        element={<Cart cartitems={cartitems}/>}/>
<Route path="/orders"      Component={Orders}/>
<Route path="/contact" Component={Contact}/>
       
    

    </Routes>
    </>
    )
    
}
export default Main;