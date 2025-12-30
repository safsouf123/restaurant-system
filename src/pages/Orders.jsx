import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "https://restaurant-system-production-2f66.up.railway.app";

export default function Orders({ user }) {
const [orders, setOrders] = useState([]);
const [loading, setLoading] = useState(true);
const [msg, setMsg] = useState("");

useEffect(() => {
if (!user?.id) {
setLoading(false);
setOrders([]);
return;
}

setMsg("");
setLoading(true);

fetch(`${API}/api/orders?userId=${user.id}`)
.then((res) => res.json())
.then((data) => {
setOrders(Array.isArray(data) ? data : []);
setLoading(false);
})
.catch(() => {
setMsg("Could not load orders.");
setLoading(false);
});
}, [user?.id]);

if (!user?.id) {
return (
<div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-pink-50 to-white">
<div className="text-pink-400 mb-4 animate-bounce text-6xl">˗ˏˋ ♡ ˎˊ˗</div>

<h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-2">
Please login first
</h2>

<Link
to="/login"
className="px-6 py-3 bg-pink-500 text-white rounded-full text-sm sm:text-base font-semibold shadow-md shadow-pink-200 hover:bg-pink-600 active:scale-95 transition-all"
>
Go to Login
</Link>
</div>
);
}

if (loading) return <p className="p-6 text-pink-700">Loading...</p>;

return (
<main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50/60 to-amber-50/50 px-4 sm:px-6 lg:px-8 py-8">
<div className="max-w-4xl mx-auto">
<section className="bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl shadow-xl shadow-pink-100/60 p-6 sm:p-8">
<h1 className="text-2xl sm:text-3xl font-extrabold text-pink-800 mb-4">
Your Orders
</h1>

{msg && (
<div className="mb-4 p-3 rounded-2xl bg-amber-100 text-amber-900 text-sm border border-amber-200">
{msg}
</div>
)}

{orders.length === 0 ? (
<p className="text-pink-700">
No orders yet… go pick something delicious from the menu! 💖
</p>
) : (
<ul className="divide-y divide-pink-100">
{orders.map((o) => {
const completed = (o.status || "").toLowerCase() === "completed";
return (
<li
key={o.id}
className="py-3 flex items-center justify-between gap-4"
>
<div>
<p className="font-semibold text-pink-900">
{o.item_name}
{completed && (
<span className="ml-2 text-[0.65rem] font-bold px-2 py-1 rounded-full bg-green-100 text-green-800 border border-green-200">
COMPLETED
</span>
)}
</p>
<p className="text-xs text-pink-700/80">
Qty: {o.quantity} · {o.status || "pending"}
</p>
</div>

<span className="font-bold text-pink-600">
${Number(o.price).toFixed(2)}
</span>
</li>
);
})}
</ul>
)}
</section>
</div>
</main>
);
}
