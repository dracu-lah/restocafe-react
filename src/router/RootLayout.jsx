import Header from "@/components/Header";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
