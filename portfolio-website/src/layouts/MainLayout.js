import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useScroll } from "../context/ScrollContext";
import { WorkTransitionProvider } from "../context/WorkTransitionContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkTransitionLayer from "../components/WorkTransitionLayer";
import "../App.css";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const mainLayoutRef = useRef(null);
  const { lenisRef } = useScroll();

  useEffect(() => {
    const lenis = lenisRef?.current;
    const hash = location.hash?.replace("#", "");
    if (hash && location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el && lenis) {
        setTimeout(() => lenis.scrollTo(el, { offset: 0, duration: 1.2 }), 100);
        return;
      }
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
        return;
      }
    }
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [location.pathname, location.hash, lenisRef]);

  const isHome = location.pathname === "/";

  return (
    <WorkTransitionProvider>
      <div className="main-layout" ref={mainLayoutRef}>
        {!isHome && <Header />}
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </div>
      <WorkTransitionLayer />
    </WorkTransitionProvider>
  );
};

export default MainLayout;