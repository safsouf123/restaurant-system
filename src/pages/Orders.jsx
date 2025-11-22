export default function Orders() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-pink-50 to-white">
      
      {/* Icon */}
      <div className="text-pink-400 mb-4 animate-bounce text-6xl">
        ˗ˏˋ ♡ ˎˊ˗
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-2 drop-shadow-sm">
        No Orders Yet
      </h2>

      {/* Cute Message */}
      <p className="text-pink-500 text-sm sm:text-base text-center max-w-xs mb-6">
        Your order list is still empty…  
        go pick something delicious from the menu! 💖
      </p>

      {/* Button */}
      <a
        href="/menu"
        className="px-6 py-3 bg-pink-500 text-white rounded-full text-sm sm:text-base font-semibold shadow-md shadow-pink-200 hover:bg-pink-600 active:scale-95 transition-all"
      >
        Browse Menu
      </a>
    </div>
  );
}