import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetRestaurantDataAPI } from "../services/api";
import PageLoader from "../components/PageLoader";
const RestaurantContext = createContext(null);

export const RestaurantProvider = ({ children }) => {
  const { isPending, error, data } = useQuery({
    queryKey: [GetRestaurantDataAPI.name],
    queryFn: () => GetRestaurantDataAPI(),
  });

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [cart, setCart] = useState([]);

  if (isPending) return <PageLoader />;
  if (error)
    return (
      <div className=" min-h-screen flex justify-center items-center">
        {"An error has occurred: " + error.message}
      </div>
    );
  return (
    <RestaurantContext
      value={{
        restaurant: data?.data[0] || null,
        selectedCategory,
        setSelectedCategory,
        cart,
        setCart,
      }}
    >
      {children}
    </RestaurantContext>
  );
};

export const useRestaurantContext = () => useContext(RestaurantContext);
