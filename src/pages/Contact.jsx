import { useState } from "react";

function Contact() {
const [form, setForm] = useState({
name: "",
email: "",
subject: "",
message: ""
});

const [submitted, setSubmitted] = useState(false);
const [msg, setMsg] = useState("");
const [loading, setLoading] = useState(false);

function handleChange(e) {
setForm({
...form,
[e.target.name]: e.target.value
});
}

async function handleSubmit(e) {
e.preventDefault();
setMsg("");
setSubmitted(false);
setLoading(true);

try {
const res = await fetch("http://localhost:5000/api/contact", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form)
});

const data = await res.json();

if (!res.ok) {
setMsg(data.message || "Could not send message.");
setLoading(false);
return;
}

setSubmitted(true);
setMsg(data.message || "Message sent successfully! 💌");

setForm({
name: "",
email: "",
subject: "",
message: ""
});

setTimeout(() => setSubmitted(false), 2500);
} catch (err) {
console.log(err);
setMsg("Server error. Try again.");
} finally {
setLoading(false);
}
}

return (
<main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50/60 to-amber-50/50 flex items-center justify-center px-4 py-12">
<div className="w-full max-w-xl bg-white/80 backdrop-blur-lg border border-pink-100 rounded-3xl shadow-xl shadow-pink-100/60 p-8">
<header className="mb-6">
<p className="text-xs tracking-[0.3em] uppercase text-pink-400 mb-2">
Contact Us
</p>
<h1 className="text-3xl font-extrabold text-pink-800">
We’d love to hear from you
</h1>
<p className="text-pink-700/80 mt-1 text-sm">
Whether it's feedback, questions, or special requests — we’re here.
</p>
</header>

{(submitted || msg) && (
<div className="mb-4 p-3 rounded-lg bg-pink-100 text-pink-700 font-semibold text-sm text-center shadow">
{msg || "Message sent successfully! 💌"}
</div>
)}

<form onSubmit={handleSubmit} className="space-y-4 text-sm">
<div>
<label className="text-pink-700 font-semibold">Name</label>
<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
placeholder="Your full name"
className="w-full px-3 py-2 mt-1 border border-pink-200 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300"
required
/>
</div>

<div>
<label className="text-pink-700 font-semibold">Email</label>
<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="Your email address"
className="w-full px-3 py-2 mt-1 border border-pink-200 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300"
required
/>
</div>

<div>
<label className="text-pink-700 font-semibold">Subject</label>
<input
type="text"
name="subject"
value={form.subject}
onChange={handleChange}
placeholder="Subject of your message"
className="w-full px-3 py-2 mt-1 border border-pink-200 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300"
required
/>
</div>

<div>
<label className="text-pink-700 font-semibold">Message</label>
<textarea
name="message"
value={form.message}
onChange={handleChange}
placeholder="Write your message here..."
rows="5"
className="w-full px-3 py-2 mt-1 border border-pink-200 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300"
required
></textarea>
</div>

<button
type="submit"
disabled={loading}
className="w-full py-2 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 active:scale-95 transition-all shadow-md disabled:opacity-60"
>
{loading ? "Sending..." : "Send Message"}
</button>
</form>
</div>
</main>
);
}

export default Contact;
