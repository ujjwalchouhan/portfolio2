import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const mainLayoutRef = useRef(null);

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (hash && location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="main-layout" ref={mainLayoutRef}>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;