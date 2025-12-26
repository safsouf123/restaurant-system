function Cart({cartitems ,  setcartitems , user}){
  const total = cartitems.reduce((sum,item) =>sum+ item.price ,0
);
function removeitem(indextoremove){
  setcartitems(previtems => previtems.filter((item,index)=>index!== indextoremove));
}

  



    return (
   <main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50/60 to-amber-50/50 px-4 sm:px-6 lg:px-8 py-8">
<div className="max-w-4xl mx-auto">
<section className="bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl shadow-xl shadow-pink-100/60 p-6 sm:p-8">
<header className="mb-6 flex items-center justify-between">
<h1 className="text-2xl sm:text-3xl font-extrabold text-pink-800">
Your Cart
</h1>
<span className="text-sm sm:text-base text-pink-600">
{cartitems.length} item{cartitems.length !== 1 ? "s" : "" }
</span>
</header>
{cartitems.length === 0 ? (
<p className="text-pink-700">
Your cart is empty. Go to the menu and add something sweet ✨
</p>
) : (
  <>
  <ul className="divide-y divide-pink-100 mb-6">
{cartitems.map((item, index) => (
<li
key={index}
className="py-3 flex items-center justify-between gap-4"
>
<div>
<p className="text-sm sm:text-base font-semibold text-pink-900">
{item.name}
</p>
<p className="text-xs sm:text-sm text-pink-700/80">
{item.meal} · {item.temperature}
</p> 
</div>
<span className="text-sm sm:text-base font-bold text-pink-600">
${Number(item.price).toFixed(2)}
<div>
  <button
onClick={async () => {
const userId = localStorage.getItem("userId"); // you must store this after login
if (!userId) {
alert("Please login first");
const userId = user.id;
return;
}

for (const item of cartitems) {
await fetch("http://localhost:4000/api/orders", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
user_id: userId,
item_name: item.name,
quantity: 1,
price: item.price
})
});
}

setcartitems([]);
alert("Order placed ✅");
}}
className="mt-4 w-full rounded-full bg-amber-400 text-amber-900 text-sm font-semibold py-2 shadow-md shadow-amber-200 hover:bg-amber-500 active:scale-95 transition-all duration-200"
>
Checkout
</button>

  <button onClick={() => {removeitem(index)}}>
Remove 
  </button>
</div>
</span>
</li>

))}
</ul>

<div className="flex items-center justify-between border-t border-pink-100 pt-4">
<p className="text-sm sm:text-base font-semibold text-pink-800">
Total
</p>
<p className="text-lg sm:text-xl font-extrabold text-pink-700">
${Number(total).toFixed(2)}
</p>
</div>

  </>
)}
</section>

</div>
</main>

    );
    
}
export default Cart;