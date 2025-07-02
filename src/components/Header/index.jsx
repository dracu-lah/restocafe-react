import { ShoppingCartIcon } from "lucide-react";
import { useRestaurantContext } from "../../context/RestaurantContext";
import { Link } from "react-router";
import routePath from "@/router/routePath";
const Header = () => {
  const { restaurant, cart } = useRestaurantContext();
  return (
    <header className="border-b-2 border-black/0  flex p-4 justify-between">
      <Link to={routePath.menu} className="cursor-pointer">
        <h1 className="text-red-500 font-semibold text-2xl">
          {restaurant.restaurant_name}
        </h1>
      </Link>

      <Link
        to={routePath.cart}
        className="flex gap-4 items-center cursor-pointer justify-between"
      >
        <h4 className="font-semibold">My Orders</h4>
        <div className="relative">
          <div className="absolute bg-red-500 rounded-full size-6 -top-3 -right-2 flex justify-center items-center font-semibold text-white text-xs">
            <h1>{cart.length}</h1>
          </div>
          <ShoppingCartIcon />
        </div>
      </Link>
    </header>
  );
};

export default Header;
