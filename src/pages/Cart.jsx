function Cart({cartitems}){
  const total = cartitems.reduce((sum,item) =>sum+ item.price ,0
);
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
${item.price.toFixed(2)}
</span>
</li>
))}
</ul>

<div className="flex items-center justify-between border-t border-pink-100 pt-4">
<p className="text-sm sm:text-base font-semibold text-pink-800">
Total
</p>
<p className="text-lg sm:text-xl font-extrabold text-pink-700">
${total.toFixed(2)}
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