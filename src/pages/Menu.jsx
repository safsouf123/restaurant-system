import {useState} from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FloatingCart from "./Floatingcart";

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





function Menu ({onAddtocart , cartitems}){
const [mealfilter , setmealfilter] = useState("all");
const [tempfilter , settempfilter] = useState("all");
const filtereditems = menuitems.filter((item) => {
const matchesmeal = mealfilter === "all" ? true : item.meal === mealfilter;
const matchestemp = tempfilter === "all" ? true : item.temperature === tempfilter;
return matchesmeal && matchestemp;
});
const [addeditem, setaddeditem] = useState(null);
    return (
        <>
<main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50/60 to-amber-50/50 px-4 sm:px-6 lg:px-8 py-8">
<div className="relative max-w-6xl mx-auto">

<div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 bg-pink-200/50 rounded-full blur-3xl opacity-70" />
<div className="pointer-events-none absolute -bottom-32 -right-10 w-72 h-72 bg-amber-200/60 rounded-full blur-3xl opacity-70" />
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_65%)]" />

<section className="relative bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl shadow-xl shadow-pink-100/60 p-6 sm:p-8 lg:p-10">

<header className="mb-6 sm:mb-8">
<p className="text-[0.75rem] font-semibold tracking-[0.3em] uppercase text-pink-400 mb-2">
Our Menu
</p>
<h1 className="text-3xl sm:text-4xl font-extrabold text-pink-800 tracking-tight">
Something sweet, something warm,
<span className="block text-pink-500">something just for you.</span>
</h1>
<p className="mt-3 text-sm sm:text-base text-pink-900/80 max-w-xl">
Choose from cozy breakfast bites, comforting drinks, and handcrafted
desserts. We’ll add the actual items in the next steps.
</p>
</header>
<div className="mb-6 space-y-3">
    <div>
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-pink-400 mb-1">
            meal type
            </p>
            <button
onClick={() => setmealfilter("all")}
className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-200 ${
mealfilter === "all"
? "bg-pink-500 text-white border-pink-500 shadow-md shadow-pink-200"
: "bg-white/80 text-pink-700 border-pink-100 hover:bg-pink-50"
}`}
>
All
</button>
<button
onClick={() => setmealfilter("breakfast")}
className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-200 ${
mealfilter === "breakfast"
? "bg-pink-500 text-white border-pink-500 shadow-md shadow-pink-200"
: "bg-white/80 text-pink-700 border-pink-100 hover:bg-pink-50"
}`}
>
Breakfast
</button>
<button
onClick={() => setmealfilter("savory")}
className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-200 ${
mealfilter === "savory"
? "bg-pink-500 text-white border-pink-500 shadow-md shadow-pink-200"
: "bg-white/80 text-pink-700 border-pink-100 hover:bg-pink-50"
}`}
>
Savory
</button>
<button
onClick={() => setmealfilter("dessert")}
className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-200 ${
mealfilter === "dessert"
? "bg-pink-500 text-white border-pink-500 shadow-md shadow-pink-200"
: "bg-white/80 text-pink-700 border-pink-100 hover:bg-pink-50"
}`}
>
Dessert
</button>
<button
onClick={() => setmealfilter("drinks")}
className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-200 ${
mealfilter === "drinks"
? "bg-pink-500 text-white border-pink-500 shadow-md shadow-pink-200"
: "bg-white/80 text-pink-700 border-pink-100 hover:bg-pink-50"
}`}
>
Drinks
</button>
    </div>
    </div>

    <div>
<p className="text-[0.7rem] uppercase tracking-[0.2em] text-pink-400 mb-1">
Temperature
</p>
<div className="flex flex-wrap gap-2">
<button
onClick={() => settempfilter("all")}
className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-200 ${
tempfilter === "all"
? "bg-amber-400 text-amber-900 border-amber-400 shadow-md shadow-amber-200"
: "bg-white/80 text-amber-800 border-amber-100 hover:bg-amber-50"
}`}
>
All
</button>
<button
onClick={() => settempfilter("hot")}
className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-200 ${
tempfilter === "hot"
? "bg-amber-400 text-amber-900 border-amber-400 shadow-md shadow-amber-200"
: "bg-white/80 text-amber-800 border-amber-100 hover:bg-amber-50"
}`}
>
Hot
</button>
<button
onClick={() => settempfilter("cold")}
className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-200 ${
tempfilter === "cold"
? "bg-amber-400 text-amber-900 border-amber-400 shadow-md shadow-amber-200"
: "bg-white/80 text-amber-800 border-amber-100 hover:bg-amber-50"
}`}
>
Cold
</button>
</div>
</div>

<div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:-grid-cols-3">
    {filtereditems.map((item) =>(
        <Link to={`/menu/${item.id}`}
        key={item.id}
        className="block"
        >
        <article
        key={item.id}
className="group relative bg-pink-50/70 border border-pink-100 rounded-2xl shadow-sm shadow-pink-100/60 hover:shadow-md hover:shadow-pink-100/90 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="relative h-36 sm:h-40 w-full overflow-hidden bg-pink-100">
<img
src={item.image}
alt={item.name}
className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
/>
<div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 via-transparent to-transparent opacity-60 pointer-events-none" />
<div className="absolute top-2 left-2 px-3 py-1 rounded-full bg-white/85 text-[0.65rem] font-semibold uppercase tracking-wide text-pink-600 shadow-sm">
{item.tag}
</div>
</div>


<div className="p-4 sm:p-5">

<div className="flex items-start justify-between gap-3 mb-2">
<h2 className="text-base sm:text-lg font-semibold text-pink-900">
{item.name}
</h2>
<span className="text-sm sm:text-base font-bold text-pink-600">
${item.price.toFixed(2)}
</span>
</div>

<p className="text-xs sm:text-sm text-pink-900/80 mb-3">
{item.description}
</p>

<div className="flex flex-wrap gap-1.5 text-[0.65rem] uppercase tracking-[0.16em]">
<span className="px-2 py-1 rounded-full bg-white/80 text-pink-500 border border-pink-100">
{item.meal}
</span>
<span className="px-2 py-1 rounded-full bg-white/80 text-pink-500 border border-pink-100">
{item.temperature}
</span>
</div>
<div className="relative">
<button onClick={(e)=>{e.preventDefault();
    onAddtocart(item);
    setaddeditem(item.id);setTimeout(()=> setaddeditem(null),2000);
}}
className="mt-4 w-full rounded-full bg-pink-500 text-white text-xs sm:text-sm font-semibold py-2 shadow-md shadow-pink-200 hover:bg-pink-600 active:scale-95 transition-all duration-200">
Add to plate
</button>
{addeditem === item.id && (
    <span className="absolute top-0 right-0 transform -translate-y-full bg-amber-400 text-pink-700 px-2 py-1 rounded-full text-xs font-semibold shadow-md">added to cart!</span>
)}
</div>
</div>
</article>
</Link>
    )
)}
    </div>

</section>
</div>
</main>
<FloatingCart cartitems={cartitems}></FloatingCart>
</>

    );
}
export default Menu;