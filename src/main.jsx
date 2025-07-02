import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RestaurantProvider } from "./context/RestaurantContext.jsx";
import Routes from "./router/routes/index.jsx";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RestaurantProvider>
        <Routes />
      </RestaurantProvider>
    </QueryClientProvider>
  </StrictMode>,
);
