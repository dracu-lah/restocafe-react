import { useRestaurantContext } from "@/context/RestaurantContext";

const DishCategories = () => {
  const { restaurant, selectedCategory, setSelectedCategory } =
    useRestaurantContext();
  return (
    <div className="border-b-1 sticky  top-0 bg-white border-b-gray-300 flex gap-4 w-full overflow-x-auto whitespace-nowrap ">
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
  );
};

export default DishCategories;
