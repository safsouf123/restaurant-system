import { Link } from "react-router-dom";
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
function Navbar(){
    return(
     
        <nav className="bg-pink-200 shadow-md py-4 ">
      <div className="flex items-center justify-center h-[30vh]">
 <h1 className="text-3xl font-bold text-pink-700 mb-2 font-[Poppins]">
          BAKE-ERA  <AutoFixHighOutlinedIcon /> 
        </h1>
    </div>
         <div className="flex items-start justify-center space-x-8 text-lg font-medium text-gray-700 bg-pink ">
               <Link to="/" className= "hover:text-pink-600 transition-colors duration-200 font-bold text-pink-900">
                 Home </Link>
                <Link to="/about" className= "hover:text-pink-600 transition-colors duration-200 font-bold text-pink-900">  About</Link>
                <Link to="/menu" className="hover:text-pink-600 transition-colors duration-200 font-bold text-pink-900">  Menu</Link>
                <Link to="/cart" className= "hover:text-pink-600 transition-colors duration-200 font-bold text-pink-900">  Cart</Link>
        
                <Link to ="/orders" className= "hover:text-pink-600 transition-colors duration-200 font-boldtext-pink-900 font-bold text-pink-900">  Order </Link>
        </div>
        
        </nav>
     
    )
}
export default Navbar;