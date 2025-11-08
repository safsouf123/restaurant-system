import { NavLink } from "react-router-dom";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
function Navbar() {
const links = [
{ to: "/", label: "Home" },
{ to: "/about", label: "About" },
{ to: "/menu", label: "Menu" },
{ to: "/cart", label: "Cart" },
{ to: "/orders", label: "Order" },
];

return (
<nav className="sticky top-0 z-30 bg-pink-50/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
{/* soft gradient glow */}
<div className="pointer-events-none absolute inset-x-0 -top-10 h-16 bg-gradient-to-b from-pink-200/60 to-transparent blur-2xl opacity-80" />

<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
{/* top row */}
<div className="flex items-center justify-between py-3">
{/* Brand */}
<div className="flex items-center gap-3 group">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-amber-400 shadow-lg shadow-pink-300/60 transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
<AutoFixHighOutlinedIcon className="text-white" fontSize="small" />
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

{/* Desktop links */}
<div className="hidden md:flex items-center space-x-6">
{links.map((link) => (
<div
key={link.to}
className="relative group transform transition-transform duration-200 hover:-translate-y-0.5"
>
<NavLink
to={link.to}
className={({ isActive }) =>
[
"text-sm font-semibold tracking-wide transition-colors duration-200",
isActive
? "text-pink-600"
: "text-slate-700 hover:text-pink-500",
].join(" ")
}
>
{({ isActive }) => (
<>
<span>{link.label}</span>
{/* underline */}
<span
className={[
"absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-gradient-to-r from-pink-500 to-amber-400 transform origin-left transition-transform duration-300",
isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
].join(" ")}
/>
</>
)}
</NavLink>
</div>
))}
</div>

{/* Mobile badge */}
<div className="md:hidden">
<span className="px-3 py-1 text-[0.7rem] font-semibold rounded-full bg-pink-100 text-pink-700 shadow-inner shadow-pink-200">
Open 7am – 9pm
</span>
</div>
</div>

{/* Mobile links row */}
<div className="flex md:hidden justify-between pb-2 pt-1 text-xs font-medium text-slate-700">
{links.map((link) => (
<NavLink
key={link.to}
to={link.to}
className={({ isActive }) =>
[
"px-2 py-1 rounded-full transition-all duration-200",
isActive
? "bg-pink-500 text-white shadow-sm shadow-pink-300"
: "hover:bg-pink-100 hover:text-pink-600",
].join(" ")
}
>
{link.label}
</NavLink>
))}
</div>
</div>
</nav>
);
}

export default Navbar;