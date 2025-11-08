function About() {
return (
<main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50/60 to-amber-50/50 flex items-stretch justify-center px-4 sm:px-6 lg:px-8 py-10">
<div className="relative w-full max-w-5xl mx-auto">
{/* background blobs */}
<div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 bg-pink-200/50 rounded-full blur-3xl opacity-70" />
<div className="pointer-events-none absolute -bottom-32 -right-10 w-72 h-72 bg-amber-200/60 rounded-full blur-3xl opacity-70" />
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_65%)]" />

{/* content card */}
<section className="relative bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl shadow-xl shadow-pink-100/60 overflow-hidden">
{/* top strip */}
<div className="h-2 w-full bg-gradient-to-r from-pink-400 via-amber-300 to-rose-400" />

<div className="p-6 sm:p-10 lg:p-12">
{/* heading */}
<header className="mb-6 sm:mb-8">
<p className="text-[0.75rem] font-semibold tracking-[0.3em] uppercase text-pink-400 mb-2">
Our Story
</p>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-800 tracking-tight">
Baked from the heart,
<span className="block text-pink-500">shared with a smile.</span>
</h1>
</header>

{/* main content */}
<div className="grid gap-8 md:grid-cols-[1.6fr_1.2fr] items-start">
{/* left: story */}
<div className="space-y-4 text-sm sm:text-base text-pink-900/90 leading-relaxed">
<p>
At <span className="font-semibold text-pink-600">BAKE-ERA</span>, every loaf,
pastry, and crumb begins the same way: with a quiet morning, a warm oven, and
hands that genuinely love the craft. We don&apos;t just bake to fill shelves –
we bake to fill moments. The slow mornings, the after-school treats, the
late-night heart-to-hearts… we&apos;re honored to be on the table for all of it.
</p>

<p>
Our recipes are stitched together from family traditions, little experiments
that went deliciously right, and a constant promise to keep things{" "}
<span className="font-semibold">simple, honest, and warm</span>. We caramelize
our sugars low and slow, proof our doughs with patience, and never rush the
small details that make a bite feel like home.
</p>

<p>
When you walk through our doors, we want you to feel the same comfort you’d feel
in a friend’s kitchen: the smell of butter and vanilla in the air, the soft hum
of conversation, and someone who remembers your &quot;usual&quot; without you
having to ask.
</p>

<p>
This isn&apos;t a factory line. It&apos;s a little corner of the world where
everything is still made by hand, with care, with heart – and always with you in
mind.
</p>
</div>

{/* right: highlights */}
<aside className="space-y-4 md:space-y-5">
<div className="rounded-2xl bg-pink-50/80 border border-pink-100 p-4 sm:p-5 shadow-sm shadow-pink-100/70 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
<h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-pink-500 mb-2">
What makes us different
</h2>
<ul className="space-y-2 text-sm text-pink-900/90">
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-400" />
<span>
<span className="font-semibold">Small-batch baking</span> – we bake in
small runs so everything tastes fresh, not factory-perfect.
</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-400" />
<span>
<span className="font-semibold">Ingredients we&apos;re proud of</span> –
real butter, stone-ground flour, and seasonal fruits whenever we can.
</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-400" />
<span>
<span className="font-semibold">People before products</span> – we care
more about your experience than a perfectly stacked display.
</span>
</li>
</ul>
</div>

<div className="rounded-2xl bg-amber-50/80 border border-amber-100 p-4 sm:p-5 shadow-sm shadow-amber-100/70 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
<h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-500 mb-2">
Our promise to you
</h2>
<p className="text-sm text-amber-900/90">
Whether you&apos;re here for your first croissant or your hundredth,
we want each visit to feel like a gentle pause in your day – a moment
to breathe, to savor, and to smile at something made just for you.
</p>
</div>

<div className="rounded-2xl bg-white/80 border border-pink-100 p-4 sm:p-5 text-xs sm:text-sm text-pink-900/90">
<p className="font-semibold text-pink-600 mb-1">
From our oven to your table,
</p>
<p>
thank you for letting <span className="font-semibold">BAKE-ERA</span> be part
of your mornings, your celebrations, and your everyday in-betweens. You are
the heart behind every batch we bake.
</p>
</div>
</aside>
</div>
</div>
</section>
</div>
</main>
);
}

export default About;
