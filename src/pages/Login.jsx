import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [msg, setMsg] = useState("");

function handleLogin(e) {
  e.preventDefault();
  setMsg("");

  const API_URL = process.env.REACT_APP_API_URL;

  fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then((res) =>
      res.json().then((data) => ({ ok: res.ok, data }))
    )
    .then(({ ok, data }) => {
      if (!ok) {
        setMsg(data.message || "Login failed");
        return;
      }

      setUser({
        id: data.userId,
        name: data.name,
        role: data.role
      });

      navigate("/menu");
    })
    .catch(() => setMsg("Server error, try again."));
}



return (
<main className="min-h-screen flex items-center justify-center px-6 py-10 bg-gradient-to-b from-pink-50 to-white">
<section className="w-full max-w-md bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl shadow-xl shadow-pink-100/60 p-6 sm:p-8">
<div className="text-pink-400 mb-3 text-5xl text-center">˗ˏˋ ♡ ˎˊ˗</div>

<h1 className="text-2xl sm:text-3xl font-extrabold text-pink-800 mb-1">
Login
</h1>
<p className="text-pink-500 text-sm mb-5">
Welcome back to Bake-Era 💖
</p>

{msg && (
<div className="mb-4 p-3 rounded-2xl bg-amber-100 text-amber-900 text-sm border border-amber-200">
{msg}
</div>
)}

<form onSubmit={handleLogin} className="space-y-4">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.2em] text-pink-400 mb-1">
Email
</label>
<input
type="email"
className="w-full rounded-2xl border border-pink-100 bg-white px-3 py-2 outline-none focus:border-pink-300"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="you@email.com"
required
/>
</div>

<div>
<label className="block text-[0.7rem] uppercase tracking-[0.2em] text-pink-400 mb-1">
Password
</label>
<input
type="password"
className="w-full rounded-2xl border border-pink-100 bg-white px-3 py-2 outline-none focus:border-pink-300"
value={password}
onChange={(e) => setPassword(e.target.value)}
placeholder="••••••••"
required
/>
</div>

<button className="w-full rounded-full bg-pink-500 text-white text-sm font-semibold py-2 shadow-md shadow-pink-200 hover:bg-pink-600 active:scale-95 transition-all">
Login
</button>
</form>

<p className="mt-5 text-sm text-pink-600">
Don’t have an account?{" "}
<Link to="/signup" className="font-semibold text-pink-700 hover:underline">
Sign up
</Link>
</p>
</section>
</main>
);
}
