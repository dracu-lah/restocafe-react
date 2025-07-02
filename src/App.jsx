import { useQuery } from "@tanstack/react-query";
import { GetRestaurantDataAPI } from "./api";
import { useState } from "react";
import { LoaderCircleIcon } from "lucide-react";
import Header from "./components/Header";
import DishCategories from "./components/DishCategories";
import Dishes from "./components/Dishes";
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
      <Header restaurant={restaurant} />
      <DishCategories
        restaurant={restaurant}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Dishes restaurant={restaurant} selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
