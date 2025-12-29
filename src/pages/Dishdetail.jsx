import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Dishdetail({ onAddtocart }) {
const { id } = useParams();
const [item, setItem] = useState(null);
const [msg, setMsg] = useState("");

useEffect(() => {
setItem(null);
setMsg("");

fetch(`http://localhost:5000/api/menu/${id}`)
.then((res) =>
res.json().then((data) => ({ ok: res.ok, data }))
)
.then(({ ok, data }) => {
if (!ok) {
setMsg(data.message || "Item not found");
return;
}
setItem(data);
})
.catch(() => setMsg("Could not load item."));
}, [id]);

if (msg) {
return (
<main className="min-h-screen flex items-center justify-center px-6 py-10 bg-gradient-to-b from-pink-50 to-white">
<section className="w-full max-w-md bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl shadow-xl shadow-pink-100/60 p-6 sm:p-8 text-center">
<h2 className="text-2xl font-extrabold text-pink-800 mb-2">Oops</h2>
<p className="text-pink-700 mb-5">{msg}</p>
<Link
to="/menu"
className="px-6 py-3 bg-pink-500 text-white rounded-full text-sm font-semibold shadow-md shadow-pink-200 hover:bg-pink-600 active:scale-95 transition-all"
>
Back to Menu
</Link>
</section>
</main>
);
}

if (!item) return <p className="p-6 text-pink-700">Loading...</p>;

return (
<main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50/60 to-amber-50/50 px-4 sm:px-6 lg:px-8 py-8">
<div className="max-w-3xl mx-auto">
<section className="bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl shadow-xl shadow-pink-100/60 overflow-hidden">
<div className="h-64 bg-pink-100">
<img
src={item.image}
alt={item.name}
className="w-full h-full object-cover"
/>
</div>

<div className="p-6 sm:p-8">
<p className="text-[0.75rem] font-semibold tracking-[0.3em] uppercase text-pink-400 mb-2">
Dish Detail
</p>

<div className="flex items-start justify-between gap-4">
<h1 className="text-2xl sm:text-3xl font-extrabold text-pink-800">
{item.name}
</h1>

<span className="text-lg sm:text-xl font-extrabold text-pink-600">
${Number(item.price).toFixed(2)}
</span>
</div>

<p className="mt-3 text-pink-900/80">
{item.description}
</p>

<div className="mt-4 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.16em]">
<span className="px-2 py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
{item.meal}
</span>
<span className="px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
{item.temperature}
</span>
{item.tag && (
<span className="px-2 py-1 rounded-full bg-white text-pink-600 border border-pink-100">
{item.tag}
</span>
)}
</div>

<div className="mt-6 flex gap-3">
<button
onClick={() => onAddtocart(item)}
className="flex-1 rounded-full bg-pink-500 text-white text-sm font-semibold py-2 shadow-md shadow-pink-200 hover:bg-pink-600 active:scale-95 transition-all duration-200"
>
Add to cart
</button>

<Link
to="/menu"
className="flex-1 text-center rounded-full bg-white/80 text-pink-700 text-sm font-semibold py-2 border border-pink-200 hover:bg-pink-50 active:scale-95 transition-all duration-200"
>
Back to Menu
</Link>
</div>
</div>
</section>
</div>
</main>
);
}

export default Dishdetail;
