import { useState } from "react";

const MOCK_ITEMS = [
{
id: 1,
name: "Butter Croissant",
description: "Flaky, buttery layers baked fresh every morning.",
price: 3.5,
tags: ["breakfast", "hot", "sweet"],
badge: "Morning favorite",
image:
"https://images.pexels.com/photos/8105045/pexels-photo-8105045.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
{
id: 2,
name: "Cinnamon Roll Swirl",
description: "Soft roll with cinnamon sugar and vanilla glaze.",
price: 4.0,
tags: ["breakfast", "hot", "sweet"],
badge: "Best seller",
image:
"https://images.pexels.com/photos/4047217/pexels-photo-4047217.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
{
id: 3,
name: "Sourdough Sandwich",
description: "Toasted sourdough with cheese, tomato, and herbs.",
price: 7.5,
tags: ["dinner", "savory", "hot"],
badge: "Hearty bite",
image:
"https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
{
id: 4,
name: "Garden Quiche Slice",
description: "Egg custard with spinach, feta, and roasted peppers.",
price: 6.0,
tags: ["breakfast", "dinner", "savory", "hot"],
badge: "From the oven",
image:
"https://images.pexels.com/photos/5419305/pexels-photo-5419305.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
{
id: 5,
name: "Berry Tart",
description: "Buttery crust filled with cream and fresh berries.",
price: 5.25,
tags: ["dessert", "cold", "sweet"],
badge: "Seasonal",
image:
"https://images.pexels.com/photos/13279208/pexels-photo-13279208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
{
id: 6,
name: "Iced Vanilla Latte",
description: "Chilled espresso, milk, and a touch of vanilla.",
price: 4.75,
tags: ["drinks", "cold"],
badge: "Cool & refreshing",
image:
"https://images.pexels.com/photos/29070514/pexels-photo-29070514.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
{
id: 7,
name: "Classic Hot Chocolate",
description: "Rich cocoa topped with whipped cream.",
price: 3.75,
tags: ["drinks", "hot", "sweet"],
badge: "Cozy choice",
image:
"https://images.pexels.com/photos/14704654/pexels-photo-14704654.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
];

const MEAL_FILTERS = [
{ id: "all", label: "All" },
{ id: "breakfast", label: "Breakfast" },
{ id: "dinner", label: "Dinner / Savory" },
{ id: "dessert", label: "Dessert" },
{ id: "drinks", label: "Drinks" },
];

const TEMP_FILTERS = [
{ id: "all", label: "All" },
{ id: "hot", label: "Hot" },
{ id: "cold", label: "Cold" },
];

function Menu() {
const [mealFilter, setMealFilter] = useState("all");
const [tempFilter, setTempFilter] = useState("all");

const filteredItems = MOCK_ITEMS.filter((item) => {
const hasMeal =
mealFilter === "all" ? true : item.tags.includes(mealFilter);
const hasTemp =
tempFilter === "all" ? true : item.tags.includes(tempFilter);
return hasMeal && hasTemp;
});

return (
<main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50/60 to-amber-50/50 px-4 sm:px-6 lg:px-8 py-8">
<div className="relative max-w-6xl mx-auto">
{/* background blobs */}
<div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 bg-pink-200/50 rounded-full blur-3xl opacity-70" />
<div className="pointer-events-none absolute -bottom-32 -right-10 w-72 h-72 bg-amber-200/60 rounded-full blur-3xl opacity-70" />
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_65%)]" />

{/* content */}
<section className="relative bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl shadow-xl shadow-pink-100/60 p-6 sm:p-8 lg:p-10">
{/* header */}
<header className="mb-6 sm:mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-[0.75rem] font-semibold tracking-[0.3em] uppercase text-pink-400 mb-2">
Our Menu
</p>
<h1 className="text-3xl sm:text-4xl font-extrabold text-pink-800 tracking-tight">
Something sweet, something warm,
<span className="block text-pink-500">something just for you.</span>
</h1>
<p className="mt-3 text-sm sm:text-base text-pink-900/80 max-w-xl">
Choose from cozy breakfast bites, comforting drinks, and
handcrafted desserts. Filter by what you&apos;re craving:
something hot and cuddly, or cool and refreshing.
</p>
</div>

<div className="mt-2 sm:mt-0 text-xs sm:text-sm text-pink-600 bg-pink-50 border border-pink-100 px-3 py-2 rounded-2xl shadow-sm inline-flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
<span>Fresh batches are baked throughout the day.</span>
</div>
</header>

{/* filters */}
<div className="mb-6 space-y-3">
<div>
<p className="text-[0.7rem] uppercase tracking-[0.2em] text-pink-400 mb-1">
Meal type
</p>
<div className="flex flex-wrap gap-2">
{MEAL_FILTERS.map((filter) => (
<button
key={filter.id}
onClick={() => setMealFilter(filter.id)}
className={[
"px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border",
mealFilter === filter.id
? "bg-pink-500 text-white border-pink-500 shadow-md shadow-pink-200"
: "bg-white/80 text-pink-700 border-pink-100 hover:bg-pink-50",
].join(" ")}
>
{filter.label}
</button>
))}
</div>
</div>

<div>
<p className="text-[0.7rem] uppercase tracking-[0.2em] text-pink-400 mb-1">
Temperature
</p>
<div className="flex flex-wrap gap-2">
{TEMP_FILTERS.map((filter) => (
<button
key={filter.id}
onClick={() => setTempFilter(filter.id)}
className={[
"px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border",
tempFilter === filter.id
? "bg-amber-400 text-amber-900 border-amber-400 shadow-md shadow-amber-200"
: "bg-white/80 text-amber-800 border-amber-100 hover:bg-amber-50",
].join(" ")}
>
{filter.label}
</button>
))}
</div>
</div>
</div>

{/* items grid */}
<div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
{filteredItems.map((item) => (
<article
key={item.id}
className="group relative bg-pink-50/70 border border-pink-100 rounded-2xl shadow-sm shadow-pink-100/60 hover:shadow-md hover:shadow-pink-100/90 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
>
{/* image */}
<div className="relative h-36 sm:h-40 w-full overflow-hidden bg-pink-100">
<img
src={item.image}
alt={item.name}
className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
/>
<div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 via-transparent to-transparent opacity-60 pointer-events-none" />
{item.badge && (
<div className="absolute top-2 left-2 px-3 py-1 rounded-full bg-white/85 text-[0.65rem] font-semibold uppercase tracking-wide text-pink-600 shadow-sm">
{item.badge}
</div>
)}
</div>

{/* text content */}
<div className="p-4 sm:p-5">
{/* name & price */}
<div className="flex items-start justify-between gap-3 mb-2">
<h2 className="text-base sm:text-lg font-semibold text-pink-900">
{item.name}
</h2>
<span className="text-sm sm:text-base font-bold text-pink-600">
${item.price.toFixed(2)}
</span>
</div>

{/* description */}
<p className="text-xs sm:text-sm text-pink-900/80 mb-3">
{item.description}
</p>

{/* tags */}
<div className="flex flex-wrap gap-1.5 text-[0.65rem] uppercase tracking-[0.16em]">
{item.tags.map((tag) => (
<span
key={tag}
className="px-2 py-1 rounded-full bg-white/80 text-pink-500 border border-pink-100"
>
{tag}
</span>
))}
</div>

{/* add to cart button */}
<button className="mt-4 w-full rounded-full bg-pink-500 text-white text-xs sm:text-sm font-semibold py-2 shadow-md shadow-pink-200 hover:bg-pink-600 active:scale-95 transition-all duration-200">
Add to plate
</button>
</div>
</article>
))}

{filteredItems.length === 0 && (
<div className="col-span-full text-center py-10 text-sm text-pink-700">
Nothing matches that craving yet. Try changing your filters – or
check back soon for new bakes!
</div>
)}
</div>
</section>
</div>
</main>
);
}

export default Menu;
