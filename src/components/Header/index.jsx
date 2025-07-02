import { ShoppingCartIcon } from "lucide-react";
import { useRestaurantContext } from "../../context/RestaurantContext";
const Header = () => {
  const { restaurant, cart } = useRestaurantContext();
  return (
    <header className="border-b-2 border-black/0  flex p-4 justify-between">
      <h1 className="text-red-500 font-semibold text-2xl">
        {restaurant.restaurant_name}
      </h1>

      <div className="  flex gap-4 justify-between">
        <button>My Orders</button>
        <div className="relative">
          <div className="absolute bg-red-500 rounded-full size-6 -top-3 -right-2 flex justify-center items-center font-semibold text-white text-xs">
            <h1>{cart.length}</h1>
          </div>
          <button>
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
