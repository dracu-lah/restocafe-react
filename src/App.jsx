import { useQuery } from "@tanstack/react-query";
import { baseURL } from "./constants";
import { GetRestaurantDataAPI } from "./api";
const App = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => GetRestaurantDataAPI(),
  });
  console.log("data", data);
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
