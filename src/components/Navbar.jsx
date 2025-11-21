import { Link } from "react-router-dom";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import { useState } from "react";

function Navbar() {
    const [menuOpen , setMenuOpen] = useState(false);
return (
<nav className="sticky top-0 z-30 bg-pink-50/80 backdrop-blur-md border-b border-pink-100 shadow-sm">

<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3">


<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-amber-400 shadow-lg shadow-pink-300/60">
<Link to="/">
<AutoFixHighOutlinedIcon className="text-white" fontSize="small" />
</Link>
</div>
<div className="flex flex-col leading-tight">
<span className="text-xl font-bold tracking-[0.3em] uppercase text-pink-700">
BAKE-ERA
</span>
<span className="text-[0.7rem] text-pink-400 tracking-widest uppercase font-medium">
Freshly Baked • Daily
</span>
</div>
</div>
<div className="md:hidden">
  <button 
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-pink-600 font-bold text-xl"
    aria-label="Toggle menu"
    aria-expanded={menuOpen}
  >
    ☰
  </button>
</div>
{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-pink-50 shadow-md flex flex-col gap-2 p-4 md:hidden">
    <Link to="/" onClick={() => setMenuOpen(false)} className="text-pink-700 font-semibold">Home</Link>
    <Link to="/about" onClick={() => setMenuOpen(false)} className="text-pink-700 font-semibold">About</Link>
    <Link to="/menu" onClick={() => setMenuOpen(false)} className="text-pink-700 font-semibold">Menu</Link>
    <Link to="/cart" onClick={() => setMenuOpen(false)} className="text-pink-700 font-semibold">Cart</Link>
    <Link to="/orders" onClick={() => setMenuOpen(false)} className="text-pink-700 font-semibold">Orders</Link>
    <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-pink-700 font-semibold">Contact</Link>
  </div>
)}
{/* Mobile menu */}
{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-pink-50 shadow-md flex flex-col gap-3 p-4 md:hidden z-20">
    <Link 
      to="/" 
      className="text-pink-700 font-semibold py-2 px-3 rounded hover:bg-pink-100 transition"
      onClick={() => setMenuOpen(false)}
    >
      Home
    </Link>
    <Link 
      to="/about" 
      className="text-pink-700 font-semibold py-2 px-3 rounded hover:bg-pink-100 transition"
      onClick={() => setMenuOpen(false)}
    >
      About
    </Link>
    <Link 
      to="/menu" 
      className="text-pink-700 font-semibold py-2 px-3 rounded hover:bg-pink-100 transition"
      onClick={() => setMenuOpen(false)}
    >
      Menu
    </Link>
    <Link 
      to="/cart" 
      className="text-pink-700 font-semibold py-2 px-3 rounded hover:bg-pink-100 transition"
      onClick={() => setMenuOpen(false)}
    >
      Cart
    </Link>
    <Link 
      to="/orders" 
      className="text-pink-700 font-semibold py-2 px-3 rounded hover:bg-pink-100 transition"
      onClick={() => setMenuOpen(false)}
    >
      Orders
    </Link>
    <Link 
      to="/contact" 
      className="text-pink-700 font-semibold py-2 px-3 rounded hover:bg-pink-100 transition"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </Link>
  </div>
)}
<div className="hidden md:flex items-center space-x-4 bg-pink-200 px-5 py-2 rounded-full shadow-sm backdrop-blur-md ">
    <Link to="/"  className="relative text-sm font-semibold text-slate-700 hover:text-pink-600 transition-colors duration-200
after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-600
after:transition-all after:duration-300 hover:after:w-full">
    Home 
    </Link>

    <Link to="/about" className="relative text-sm font-semibold text-slate-700 hover:text-pink-600 transition-colors duration-200
after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-600
after:transition-all after:duration-300 hover:after:w-full">
About
</Link>
<Link to="/menu" className="relative text-sm font-semibold text-slate-700 hover:text-pink-600 transition-colors duration-200
after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-600
after:transition-all after:duration-300 hover:after:w-full">
Menu
</Link>
<Link to="/cart" className="relative text-sm font-semibold text-slate-700 hover:text-pink-600 transition-colors duration-200
after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-600
after:transition-all after:duration-300 hover:after:w-full">
Cart
</Link>

<Link to="/orders" className="relative text-sm font-semibold text-slate-700 hover:text-pink-600 transition-colors duration-200
after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-600
after:transition-all after:duration-300 hover:after:w-full">
Orders
</Link>
<Link to="/contact"
className="relative text-sm font-semibold text-slate-700 hover:text-pink-600 transition-colors duration-200
after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-600
after:transition-all after:duration-300 hover:after:w-full"
>
Contact
</Link>
</div>
</div>
</div>
</nav>

)
};
export default Navbar;