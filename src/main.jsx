import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import { RestaurantProvider } from "./context/RestaurantContext.jsx";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
    </QueryClientProvider>
  </StrictMode>,
);
