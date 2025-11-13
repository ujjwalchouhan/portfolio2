import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const mainLayoutRef = useRef(null);

  useEffect(() => {
    // Scroll the main-layout div (which has overflow-y: scroll)
    if (mainLayoutRef.current) {
      mainLayoutRef.current.scrollTop = 0;

      setTimeout(() => {
      }, 100);
    }

    // Also scroll window just in case
    window.scrollTo(0, 0);
  }, [location.pathname]);

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