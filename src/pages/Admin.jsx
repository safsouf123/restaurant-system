import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Admin({ user }) {
const [users, setUsers] = useState([]);
const [orders, setOrders] = useState([]);
const [msg, setMsg] = useState("");

useEffect(() => {
setMsg("");

if (!user?.id) {
setMsg("Please login first.");
return;
}

if (user.role !== "admin") {
setMsg("Access denied. Admins only.");
return;
}

// Users
fetch(`http://localhost:5000/api/admin/users?userId=${user.id}`)
.then((res) => res.json())
.then((data) => setUsers(Array.isArray(data) ? data : []))
.catch(() => setMsg("Could not load users."));

// Orders
fetch(`http://localhost:5000/api/admin/orders?userId=${user.id}`)
.then((res) => res.json())
.then((data) => setOrders(Array.isArray(data) ? data : []))
.catch(() => setMsg("Could not load orders."));
}, [user]);

if (!user?.id) {
return (
<div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-pink-50 to-white">
<h2 className="text-2xl font-bold text-pink-600 mb-3">Please login first</h2>
<Link to="/login" className="px-6 py-3 bg-pink-500 text-white rounded-full font-semibold">
Go to Login
</Link>
</div>
);
}

if (user.role !== "admin") {
return (
<div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-pink-50 to-white">
<h2 className="text-2xl font-bold text-pink-600 mb-2">Admins only</h2>
<p className="text-pink-500">You do not have access to this page.</p>
</div>
);
}

return (
<main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50/60 to-amber-50/50 px-4 sm:px-6 lg:px-8 py-8">
<div className="max-w-5xl mx-auto">
<section className="bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl shadow-xl shadow-pink-100/60 p-6 sm:p-8">
<h1 className="text-2xl sm:text-3xl font-extrabold text-pink-800 mb-2">
Admin Panel
</h1>
<p className="text-sm text-pink-600 mb-6">
Logged in as: <span className="font-semibold">{user.name}</span> (admin)
</p>

{msg && (
<div className="mb-4 p-3 rounded-2xl bg-amber-100 text-amber-900 text-sm border border-amber-200">
{msg}
</div>
)}

<div className="grid gap-6 md:grid-cols-2">
<div className="bg-white/70 border border-pink-100 rounded-2xl p-4">
<h2 className="font-bold text-pink-700 mb-3">All Users</h2>
{users.length === 0 ? (
<p className="text-sm text-pink-600">No users found.</p>
) : (
<ul className="divide-y divide-pink-100">
{users.map((u) => (
<li key={u.id} className="py-2">
<p className="font-semibold text-pink-900">
{u.name} <span className="text-xs text-pink-500">({u.role})</span>
</p>
<p className="text-xs text-pink-700/80">{u.email}</p>
</li>
))}
</ul>
)}
</div>

<div className="bg-white/70 border border-pink-100 rounded-2xl p-4">
<h2 className="font-bold text-pink-700 mb-3">All Orders</h2>
{orders.length === 0 ? (
<p className="text-sm text-pink-600">No orders found.</p>
) : (
<ul className="divide-y divide-pink-100">
{orders.map((o) => (
<li key={o.id} className="py-2 flex items-center justify-between gap-4">
<div>
<p className="font-semibold text-pink-900">{o.item_name}</p>
<p className="text-xs text-pink-700/80">
user_id: {o.user_id} · qty: {o.quantity}
</p>
</div>
<span className="font-bold text-pink-600">
${Number(o.price).toFixed(2)}
</span>
</li>
))}
</ul>
)}
</div>
</div>
</section>
</div>
</main>
);
}
