import { useRestaurantContext } from "../../context/RestaurantContext";

const Dishes = () => {
  const { restaurant, selectedCategory, cart, setCart } =
    useRestaurantContext();
  const handleCart = (action, item) => {
    const existingDish = cart.find((d) => d.dish_id === item.dish_id);

    switch (action) {
      case "increment":
        if (existingDish) {
          setCart((prev) =>
            prev.map((d) =>
              d.dish_id === item.dish_id
                ? { ...d, quantity: d.quantity + 1 }
                : d,
            ),
          );
        } else {
          setCart((prev) => [...prev, { ...item, quantity: 1 }]);
        }
        break;

      case "decrement":
        if (!existingDish) return;
        if (existingDish.quantity === 1) {
          setCart((prev) => prev.filter((d) => d.dish_id !== item.dish_id));
        } else {
          setCart((prev) =>
            prev.map((d) =>
              d.dish_id === item.dish_id
                ? { ...d, quantity: d.quantity - 1 }
                : d,
            ),
          );
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {restaurant.table_menu_list[selectedCategory].category_dishes.map(
        (dish) => {
          const quantity =
            cart.find((d) => d.dish_id === dish.dish_id)?.quantity || 0;

          return (
            <div
              key={dish.dish_id}
              className="justify-between border-b-2 p-4 border-black/10 flex"
            >
              <div className="flex flex-col justify-between gap-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-semibold">{dish.dish_name}</h1>
                  <h2 className="font-semibold">
                    {dish.dish_currency} {dish.dish_price}
                  </h2>
                  <p className="text-sm opacity-60">{dish.dish_description}</p>
                  {dish.addonCat?.length > 0 && (
                    <span className="text-sm italic font-semibold text-yellow-700">
                      Customizations Available*
                    </span>
                  )}
                </div>
                <div className="flex text-xl rounded-full items-center w-[130px] h-10 overflow-hidden bg-green-500 text-white font-semibold justify-between">
                  <button
                    className={`h-full w-full ${
                      quantity <= 0
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer"
                    }`}
                    disabled={quantity <= 0}
                    onClick={() => handleCart("decrement", dish)}
                  >
                    -
                  </button>
                  <div>{quantity}</div>
                  <button
                    className="cursor-pointer h-full w-full"
                    onClick={() => handleCart("increment", dish)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <h3 className="whitespace-nowrap text-xs font-semibold">
                  {dish.dish_calories} Calories
                </h3>
                <div className="size-40 overflow-hidden rounded-lg object-cover border-2 border-black/10">
                  <img
                    src={dish.dish_image}
                    className="size-full"
                    alt={dish.dish_name + " image"}
                  />
                </div>
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default Dishes;
