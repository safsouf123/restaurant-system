import { useEffect, useState } from "react";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";

function Home() {
const [showHero, setShowHero] = useState(false);

useEffect(() => {
// trigger the drop-down effect after mount
const timer = setTimeout(() => setShowHero(true), 80);
return () => clearTimeout(timer);
}, []);

const heroClasses = `
relative text-center px-4
transform transition-all duration-700 ease-out
${showHero ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
`;

return (
<main className="min-h-screen bg-gradient-to-b from-pink-50 via-pink-100 to-amber-50 flex items-center justify-center overflow-hidden relative">
{/* soft background blobs */}
<div className="pointer-events-none absolute -top-32 -left-24 w-80 h-80 bg-pink-200/60 rounded-full blur-3xl opacity-70" />
<div className="pointer-events-none absolute -bottom-40 -right-24 w-96 h-96 bg-amber-200/70 rounded-full blur-3xl opacity-70" />
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_60%)]" />

{/* hero content */}
<section className={heroClasses}>
{/* small pill above logo */}
<div className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full bg-white/80 text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-pink-500 shadow-sm shadow-pink-200">
Fresh • Sweet • Daily
</div>

{/* big logo row */}
<div className="flex items-center justify-center gap-4 mb-3">
<div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-amber-400 shadow-xl shadow-pink-300/60 transform transition-transform duration-500 hover:scale-105 hover:-translate-y-0.5">
<AutoFixHighOutlinedIcon className="text-white" fontSize="medium" />
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.35em] uppercase text-pink-700 drop-shadow-[0_8px_16px_rgba(244,114,182,0.45)]">
BAKE-ERA
</h1>
</div>

{/* subtitle */}
<p className="max-w-xl mx-auto text-sm sm:text-base text-pink-700/80">
Artisanal breads, dreamy pastries, and sweet moments baked fresh every
single day. Take a seat, breathe in the aroma, and treat yourself.
</p>

{/* call to action */}
<div className="mt-6 flex justify-center gap-3">
<button className="px-5 py-2 rounded-full bg-pink-500 text-white text-sm font-semibold tracking-wide shadow-lg shadow-pink-300/70 hover:bg-pink-600 active:scale-95 transition-all duration-200">
View Today&apos;s Menu
</button>
<button className="px-5 py-2 rounded-full bg-white/80 text-pink-600 text-sm font-semibold tracking-wide border border-pink-200 hover:bg-pink-50 hover:border-pink-300 active:scale-95 transition-all duration-200">
Order for Pickup
</button>
</div>
</section>
</main>
);
}

export default Home;