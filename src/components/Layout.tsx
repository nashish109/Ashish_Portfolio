import { Footer } from "@/components/portfolio/Footer";
import { PortfolioSidebar } from "@/components/portfolio/PortfolioSidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PortfolioSidebar />
      <div className="relative z-10">
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
