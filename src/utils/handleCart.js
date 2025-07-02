export const handleCart = (action, item, cart, setCart) => {
  const existingDish = cart.find((d) => d.dish_id === item.dish_id);

  switch (action) {
    case "increment":
      if (existingDish) {
        setCart((prev) =>
          prev.map((d) =>
            d.dish_id === item.dish_id ? { ...d, quantity: d.quantity + 1 } : d,
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
            d.dish_id === item.dish_id ? { ...d, quantity: d.quantity - 1 } : d,
          ),
        );
      }
      break;

    default:
      break;
  }
};
