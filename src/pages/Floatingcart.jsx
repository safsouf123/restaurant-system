import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function FloatingCart({ cartitems }) {
  return (
    <Link to="/cart">
      <div className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg hover:bg-pink-600 transition z-50 cursor-pointer">
        <ShoppingCartIcon />
        {cartitems.length > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-400 text-xs rounded-full flex items-center justify-center text-pink-700 font-bold shadow-md">
            {cartitems.length}
          </span>
        )}
      </div>
    </Link>
  );
}

export default FloatingCart;