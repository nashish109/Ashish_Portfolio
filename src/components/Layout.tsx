import { Outlet } from "react-router-dom";
import { Footer } from "@/components/portfolio/Footer";
import { Navbar } from "@/components/portfolio/Navbar";

const Layout = () => {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main className="portfolio-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
