import { useQuery } from "@tanstack/react-query";
import { GetRestaurantDataAPI } from "./api";
import { ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import { LoaderCircleIcon } from "lucide-react";
const App = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => GetRestaurantDataAPI(),
  });

  const [selectedCategory, setSelectedCategory] = useState(0);

  if (isPending)
    return (
      <div className="animate-spin min-h-screen flex justify-center items-center">
        <LoaderCircleIcon className="size-20 text-red-500" />
      </div>
    );
  if (error) return "An error has occurred: " + error.message;
  const restaurant = data.data[0];
  return (
    <div>
      <header className="border-b-2 border-black/0  flex p-4 justify-between">
        <h1 className="text-red-500 font-semibold text-2xl">
          {restaurant.restaurant_name}
        </h1>

        <div className="  flex gap-4 justify-between">
          <button>My Orders</button>
          <button>
            <ShoppingCartIcon />
          </button>
        </div>
      </header>

      <div className="border-b-2 border-black/10 flex gap-4 w-full overflow-x-auto whitespace-nowrap ">
        {restaurant.table_menu_list.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={`${selectedCategory === index ? " border-b-3   border-red-500" : ""} cursor-pointer px-4 py-2`}
          >
            <h1>{category.menu_category}</h1>
          </button>
        ))}
      </div>
      <div className=" flex flex-col gap-4 mt-4">
        {restaurant.table_menu_list[selectedCategory].category_dishes.map(
          (dish) => (
            <div className="justify-between border-b-2 p-4 border-black/10  flex">
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold">{dish.dish_name}</h1>
                <h2 className="font-semibold">
                  {dish.dish_currency} {dish.dish_price}
                </h2>
                <p className="text-sm opacity-60">{dish.dish_description}</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <h3 className="whitespace-nowrap text-xs font-semibold">
                  {dish.dish_calories} Calories
                </h3>
                <div className="size-40 overflow-hidden rounded-lg object-cover border-2 border-black/10 ">
                  <img
                    src={dish.dish_image}
                    className="size-full"
                    alt={dish.dish_name + "image"}
                  />
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default App;
