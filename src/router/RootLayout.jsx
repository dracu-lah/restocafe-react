import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-background font-sans">
      <Header />

      <div className=" flex-1">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default RootLayout;
