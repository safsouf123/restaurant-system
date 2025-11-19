import { useParams, useNavigate } from "react-router-dom";


const menuitems = [
{
id: 1,
name: "Butter Croissant",
description: "Flaky, buttery layers baked fresh every morning.",
price: 3.5,
meal: "breakfast",
temperature: "hot",
tag: "Morning favorite",
image:
"https://images.pexels.com/photos/8105045/pexels-photo-8105045.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
{
id: 2,
name: "Cinnamon Roll Swirl",
description: "Soft roll with cinnamon sugar and vanilla glaze.",
price: 4.0,
meal: "breakfast",
temperature: "hot",
tag: "Best seller",
image:
"https://images.pexels.com/photos/4047217/pexels-photo-4047217.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
{
id: 3,
name: "Berry Tart",
description: "Buttery crust filled with cream and fresh berries.",
price: 5.25,
meal: "dessert",
temperature: "cold",
tag: "Seasonal",
image:
"https://images.pexels.com/photos/13279208/pexels-photo-13279208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
{
id: 4,
name: "Sourdough Sandwich",
description: "Toasted sourdough with cheese, tomato, and herbs.",
price: 7.5,
meal: "savory",
temperature: "hot",
tag: "Hearty bite",
image:
"https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
{
id: 5,
name: "Garden Quiche Slice",
description: "Egg custard with spinach, feta, and roasted peppers.",
price: 6,
meal: "savory",
temperature: "hot",
tag: "From the oven",
image:
"https://images.pexels.com/photos/5419305/pexels-photo-5419305.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
{
id: 6,
name: "Classic Hot Chocolate",
description: "Rich cocoa topped with whipped cream.",
price: 3.75,
meal: "drinks",
temperature: "hot",
tag: "Cozy choice",
image:
"https://images.pexels.com/photos/14704654/pexels-photo-14704654.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
{
id: 7,
name: "Iced Vanilla Latte",
description: "Chilled espresso, milk, and a touch of vanilla.",
price: 4.75,
meal: "drinks",
temperature: "cold",
tag: "Cool & refreshing",
image:
"https://images.pexels.com/photos/29070514/pexels-photo-29070514.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
},
];

function Dishdetail({onAddtocart}) {
const { id } = useParams();
const navigate = useNavigate();

const itemId = Number(id); // URL gives you a string, convert to number
const item = menuitems.find((dish) => dish.id === itemId);


if (!item) {
return (
<main className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
<div className="bg-white/90 border border-pink-100 rounded-2xl p-6 shadow-md text-center">
<p className="text-pink-700 mb-4">
Oops, we couldn&apos;t find that item.
</p>
<button
onClick={() => navigate("/menu")}
className="px-4 py-2 rounded-full bg-pink-500 text-white text-sm font-semibold hover:bg-pink-600 transition"
>
Back to menu
</button>
</div>
</main>
);
}

return (
<main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50/60 to-amber-50/50 px-4 sm:px-6 lg:px-8 py-10">
<div className="relative max-w-4xl mx-auto">
{/* background blobs */}
<div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 bg-pink-200/50 rounded-full blur-3xl opacity-70" />
<div className="pointer-events-none absolute -bottom-32 -right-10 w-72 h-72 bg-amber-200/60 rounded-full blur-3xl opacity-70" />
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_65%)]" />

<section className="relative bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl shadow-xl shadow-pink-100/60 overflow-hidden">
{/* top bar */}
<div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-pink-100">
<h1 className="text-xl sm:text-2xl font-bold text-pink-800">
{item.name}
</h1>
<button
onClick={() => navigate("/menu")}
className="text-xs sm:text-sm text-pink-600 hover:text-pink-700 underline"
>
← Back to menu
</button>
</div>

<div className="grid md:grid-cols-2 gap-0">

<div className="relative h-64 sm:h-80 md:h-full overflow-hidden bg-pink-100">
<img
src={item.image}
alt={item.name}
className="w-full h-full object-cover"
/>
<div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/85 text-[0.7rem] font-semibold uppercase tracking-wide text-pink-600 shadow-sm">
{item.tag}
</div>
</div>


<div className="p-6 sm:p-8 flex flex-col gap-4">
<div>
<p className="text-sm uppercase tracking-[0.2em] text-pink-400 mb-1">
{item.meal} · {item.temperature}
</p>
<p className="text-3xl font-extrabold text-pink-800">
${item.price.toFixed(2)}
</p>
</div>

<p className="text-sm sm:text-base text-pink-900/90 leading-relaxed">
{item.description}
</p>

<div className="mt-2 text-xs sm:text-sm text-pink-700/80">
<p>
Freshly baked and prepared in small batches. Perfect to enjoy
with a warm drink or as a little treat in your day.
</p>
</div>

<div className="mt-4 flex flex-wrap gap-3">
<button 
onClick={()=> onAddtocart(item)}


className="px-5 py-2 rounded-full bg-pink-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-pink-200 hover:bg-pink-600 active:scale-95 transition">
Add to plate
</button>
<button
onClick={() => navigate("/menu")}
className="px-5 py-2 rounded-full bg-white text-pink-600 text-xs sm:text-sm font-semibold border border-pink-200 hover:bg-pink-50 active:scale-95 transition"
>
Back to menu
</button>
</div>
</div>
</div>
</section>
</div>
</main>
);
}

export default Dishdetail;
