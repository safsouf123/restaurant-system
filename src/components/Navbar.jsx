import { Link } from "react-router-dom";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import { useState } from "react";

function Navbar({ user }) {
const [menuOpen, setMenuOpen] = useState(false);

const navLink =
"relative text-sm font-semibold text-slate-700 hover:text-pink-600 transition-colors duration-200 " +
"after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-600 " +
"after:transition-all after:duration-300 hover:after:w-full";

const mobileLink =
"text-pink-700 font-semibold py-2 px-3 rounded hover:bg-pink-100 transition";

return (
<nav className="sticky top-0 z-30 bg-pink-50/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3">
{/* Logo */}
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-amber-400 shadow-lg shadow-pink-300/60">
<Link to="/" onClick={() => setMenuOpen(false)}>
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

{/* Mobile button */}
<div className="md:hidden">
<button
onClick={() => setMenuOpen((p) => !p)}
className="text-pink-600 font-bold text-2xl px-2"
aria-label="Toggle menu"
aria-expanded={menuOpen}
>
☰
</button>
</div>

{/* Desktop Menu */}
<div className="hidden md:flex items-center space-x-4 bg-pink-200 px-5 py-2 rounded-full shadow-sm backdrop-blur-md">
<Link to="/" className={navLink}>Home</Link>
<Link to="/about" className={navLink}>About</Link>
<Link to="/menu" className={navLink}>Menu</Link>
<Link to="/cart" className={navLink}>Cart</Link>
<Link to="/orders" className={navLink}>Orders</Link>
<Link to="/contact" className={navLink}>Contact</Link>

{user?.role === "admin" && (
<Link to="/admin" className={navLink}>Admin</Link>
)}

{!user ? (
<>
<Link to="/login" className={navLink}>Login</Link>
<Link to="/signup" className={navLink}>Signup</Link>
</>
) : (
<span className="text-sm font-semibold text-pink-700">
Hi, {user.name}
</span>
)}
</div>
</div>

{/* Mobile Menu */}
{menuOpen && (
<div className="absolute top-full left-0 w-full bg-pink-50 shadow-md flex flex-col gap-2 p-4 md:hidden z-20">
<Link to="/" className={mobileLink} onClick={() => setMenuOpen(false)}>Home</Link>
<Link to="/about" className={mobileLink} onClick={() => setMenuOpen(false)}>About</Link>
<Link to="/menu" className={mobileLink} onClick={() => setMenuOpen(false)}>Menu</Link>
<Link to="/cart" className={mobileLink} onClick={() => setMenuOpen(false)}>Cart</Link>
<Link to="/orders" className={mobileLink} onClick={() => setMenuOpen(false)}>Orders</Link>
<Link to="/contact" className={mobileLink} onClick={() => setMenuOpen(false)}>Contact</Link>

{user?.role === "admin" && (
<Link to="/admin" className={mobileLink} onClick={() => setMenuOpen(false)}>
Admin
</Link>
)}

{!user ? (
<>
<Link to="/login" className={mobileLink} onClick={() => setMenuOpen(false)}>Login</Link>
<Link to="/signup" className={mobileLink} onClick={() => setMenuOpen(false)}>Signup</Link>
</>
) : (
<span className="text-pink-700 font-semibold py-2 px-3">
Hi, {user.name}
</span>
)}
</div>
)}
</div>
</nav>
);
}

export default Navbar;
