import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "https://restaurant-system-production-2f66.up.railway.app";

export default function Admin({ user }) {
const [usersWithOrders, setUsersWithOrders] = useState([]);
const [orders, setOrders] = useState([]);
const [msg, setMsg] = useState("");

const isAdmin = (user?.role || "").trim().toLowerCase() === "admin";

async function handleDelete(orderId) {
try {
await fetch(`${API}/api/admin/orders/${orderId}?userId=${user.id}`, {
method: "DELETE",
});

setOrders((prev) => prev.filter((x) => x.id !== orderId));
setUsersWithOrders((prev) => prev.filter((row) => row.order_id !== orderId));

setMsg("Order deleted ✅");
setTimeout(() => setMsg(""), 2000);
} catch {
setMsg("Could not delete order.");
}
}

async function handleStatus(orderId, newStatus) {
try {
await fetch(`${API}/api/admin/orders/${orderId}/status?userId=${user.id}`, {
method: "PUT",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ status: newStatus }),
});

setOrders((prev) =>
prev.map((x) => (x.id === orderId ? { ...x, status: newStatus } : x))
);

setUsersWithOrders((prev) =>
prev.map((row) =>
row.order_id === orderId ? { ...row, status: newStatus } : row
)
);

setMsg("Order updated ✅");
setTimeout(() => setMsg(""), 2000);
} catch {
setMsg("Could not update status.");
}
}

useEffect(() => {
setMsg("");

if (!user?.id) return;
if (!isAdmin) return;

fetch(`${API}/api/admin/users-with-orders?userId=${user.id}`)
.then((res) => res.json())
.then((data) => setUsersWithOrders(Array.isArray(data) ? data : []))
.catch(() => setMsg("Could not load users with orders."));

fetch(`${API}/api/admin/orders?userId=${user.id}`)
.then((res) => res.json())
.then((data) => setOrders(Array.isArray(data) ? data : []))
.catch(() => setMsg("Could not load orders."));
}, [user?.id, isAdmin]);

const grouped = usersWithOrders.reduce((acc, row) => {
if (!row.user_id) return acc;

if (!acc[row.user_id]) {
acc[row.user_id] = {
id: row.user_id,
name: row.user_name,
email: row.user_email,
role: row.user_role,
orders: [],
};
}

if (row.order_id) {
acc[row.user_id].orders.push({
id: row.order_id,
item_name: row.item_name,
quantity: row.quantity,
price: row.price,
status: row.status,
});
}

return acc;
}, {});

const groupedUsers = Object.values(grouped);

if (!user?.id) {
return (
<div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-pink-50 to-white">
<h2 className="text-2xl font-bold text-pink-600 mb-3">Please login first</h2>
<Link
to="/login"
className="px-6 py-3 bg-pink-500 text-white rounded-full font-semibold shadow-md shadow-pink-200 hover:bg-pink-600 active:scale-95 transition-all"
>
Go to Login
</Link>
</div>
);
}

if (!isAdmin) {
return (
<div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-pink-50 to-white">
<h2 className="text-2xl font-bold text-pink-600 mb-2">Admins only</h2>
<p className="text-pink-500">You do not have access to this page.</p>
</div>
);
}

return (
<main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50/60 to-amber-50/50 px-4 sm:px-6 lg:px-8 py-8">
<div className="max-w-6xl mx-auto">
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

<div className="grid gap-6 lg:grid-cols-2">
<div className="bg-white/70 border border-pink-100 rounded-2xl p-4">
<h2 className="font-bold text-pink-700 mb-3">Users & Their Orders</h2>

{groupedUsers.length === 0 ? (
<p className="text-sm text-pink-600">No users found.</p>
) : (
<ul className="space-y-4">
{groupedUsers.map((u) => (
<li
key={u.id}
className="border border-pink-100 rounded-2xl p-3 bg-white/60"
>
<p className="font-semibold text-pink-900">
{u.name}{" "}
<span className="text-xs text-pink-500">({u.role})</span>
</p>
<p className="text-xs text-pink-700/80 mb-2">{u.email}</p>

{u.orders.length === 0 ? (
<p className="text-xs text-pink-600">No orders yet.</p>
) : (
<ul className="divide-y divide-pink-100">
{u.orders.map((o) => {
const completed =
(o.status || "").toLowerCase() === "completed";

return (
<li
key={o.id}
className="py-2 flex items-center justify-between gap-4"
>
<div>
<p className="text-sm font-semibold text-pink-900">
{o.item_name}
{completed && (
<span className="ml-2 text-[0.65rem] font-bold px-2 py-1 rounded-full bg-green-100 text-green-800 border border-green-200">
COMPLETED
</span>
)}
</p>
<p className="text-xs text-pink-700/80">
qty: {o.quantity} · {o.status || "pending"}
</p>
</div>

<span className="text-sm font-bold text-pink-600">
${Number(o.price).toFixed(2)}
</span>
</li>
);
})}
</ul>
)}
</li>
))}
</ul>
)}
</div>

<div className="bg-white/70 border border-pink-100 rounded-2xl p-4">
<h2 className="font-bold text-pink-700 mb-3">Manage Orders</h2>

{orders.length === 0 ? (
<p className="text-sm text-pink-600">No orders found.</p>
) : (
<ul className="divide-y divide-pink-100">
{orders.map((o) => {
const isCompleted =
(o.status || "").toLowerCase() === "completed";

return (
<li
key={o.id}
className="py-3 flex items-start justify-between gap-4"
>
<div>
<p className="font-semibold text-pink-900">
{o.item_name}{" "}
{isCompleted && (
<span className="ml-2 text-[0.65rem] font-bold px-2 py-1 rounded-full bg-green-100 text-green-800 border border-green-200">
COMPLETED
</span>
)}
</p>
<p className="text-xs text-pink-700/80">
order_id: {o.id} · user_id: {o.user_id} · qty:{" "}
{o.quantity} · {o.status || "pending"}
</p>
</div>

<div className="flex flex-col items-end gap-2">
<span className="font-bold text-pink-600">
${Number(o.price).toFixed(2)}
</span>

<div className="flex gap-3">
{!isCompleted && (
<button
onClick={() => handleStatus(o.id, "completed")}
className="text-xs font-semibold text-green-700 hover:underline"
>
Mark Completed
</button>
)}

<button
onClick={() => handleDelete(o.id)}
className="text-xs font-semibold text-red-600 hover:underline"
>
Delete
</button>
</div>
</div>
</li>
);
})}
</ul>
)}
</div>
</div>
</section>
</div>
</main>
);
}
