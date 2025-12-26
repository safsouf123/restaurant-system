import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Orders({ user }) {
const [orders, setOrders] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
if (!user) return;

setLoading(true);
fetch(`http://localhost:4000/api/orders?userId=${user.id}`)
.then((res) => res.json())
.then((data) => {
setOrders(data);
setLoading(false);
})
.catch(() => setLoading(false));
}, [user]);

// Not logged in
if (!user) {
return (
<div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-pink-50 to-white">
<div className="text-pink-400 mb-4 animate-bounce text-6xl">˗ˏˋ ♡ ˎˊ˗</div>
<h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-2 drop-shadow-sm">
Login Required
</h2>
<p className="text-pink-500 text-sm sm:text-base text-center max-w-xs mb-6">
Please login first to view your orders 💖
</p>
<Link
to="/menu"
className="px-6 py-3 bg-pink-500 text-white rounded-full text-sm sm:text-base font-semibold shadow-md shadow-pink-200 hover:bg-pink-600 active:scale-95 transition-all"
>
Browse Menu
</Link>
</div>
);
}

// Loading
if (loading) {
return <p className="p-6 text-pink-700">Loading orders...</p>;
}

// No orders
if (orders.length === 0) {
return (
<div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-pink-50 to-white">
<div className="text-pink-400 mb-4 animate-bounce text-6xl">˗ˏˋ ♡ ˎˊ˗</div>
<h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-2 drop-shadow-sm">
No Orders Yet
</h2>
<p className="text-pink-500 text-sm sm:text-base text-center max-w-xs mb-6">
Your order list is still empty… go pick something delicious from the menu! 💖
</p>
<Link
to="/menu"
className="px-6 py-3 bg-pink-500 text-white rounded-full text-sm sm:text-base font-semibold shadow-md shadow-pink-200 hover:bg-pink-600 active:scale-95 transition-all"
>
Browse Menu
</Link>
</div>
);
}

// Orders list
return (
<main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50/60 to-amber-50/50 px-4 sm:px-6 lg:px-8 py-8">
<div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl shadow-xl shadow-pink-100/60 p-6 sm:p-8">
<h1 className="text-2xl sm:text-3xl font-extrabold text-pink-800 mb-4">
{user.name ? `${user.name}'s Orders` : "Your Orders"}
</h1>

<ul className="divide-y divide-pink-100">
{orders.map((o) => (
<li key={o.id} className="py-3 flex items-center justify-between gap-4">
<div>
<p className="font-semibold text-pink-900">{o.item_name}</p>
<p className="text-xs text-pink-700/80">
Qty: {o.quantity} • Status: {o.status}
</p>
</div>
<p className="font-bold text-pink-600">
${Number(o.price).toFixed(2)}
</p>
</li>
))}
</ul>
</div>
</main>
);
}
