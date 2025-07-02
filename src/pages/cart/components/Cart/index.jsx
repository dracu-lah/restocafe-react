import { Trash2Icon } from "lucide-react";
import { useRestaurantContext } from "@/context/RestaurantContext";
import { handleCart } from "@/utils/handleCart";

const Cart = () => {
  const { cart, setCart } = useRestaurantContext();

  const calcSubtotal = () => {
    let subTotal = 0;
    cart.forEach((dish) => {
      subTotal = subTotal + dish.dish_price * dish.quantity;
    });
    return subTotal;
  };
  return (
    <div className="flex flex-col gap-2 mt-4 ">
      <h1 className="text-4xl font-semibold p-4 underline ">Cart</h1>
      {cart.length <= 0 && (
        <h2 className="text-center text-xl ">Cart Is Empty!</h2>
      )}
      {cart.map((dish) => {
        const quantity =
          cart.find((d) => d.dish_id === dish.dish_id)?.quantity || 0;

        return (
          <div
            key={dish.dish_id}
            className={`justify-between border-b-2 p-4 border-black/10 flex`}
          >
            <div className="flex flex-col justify-between gap-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold">{dish.dish_name}</h1>
                <h2 className="font-semibold">
                  {dish.dish_currency} {dish.dish_price}
                </h2>
                <p className="text-sm opacity-60 md:text-base">
                  {dish.dish_description}
                </p>
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
                  onClick={() => handleCart("decrement", dish, cart, setCart)}
                >
                  -
                </button>
                <div>{quantity}</div>
                <button
                  className="cursor-pointer h-full w-full"
                  onClick={() => handleCart("increment", dish, cart, setCart)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <h3 className="whitespace-nowrap text-xs md:text-lg lg:pr-20 font-semibold">
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
      })}

      {cart.length > 0 && (
        <div className="px-8 py-4">
          <h2 className="text-right text-2xl  ">
            Subtotal:{" "}
            <span className="">
              {cart[0].dish_currency} {calcSubtotal().toFixed(2)}
            </span>
          </h2>
        </div>
      )}
      <div className="mt-4 mb-10 flex justify-center items-center">
        <button
          onClick={() => setCart([])}
          className="flex gap-2 text-white bg-red-500 px-4 py-2 cursor-pointer rounded-full"
        >
          <Trash2Icon />
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
