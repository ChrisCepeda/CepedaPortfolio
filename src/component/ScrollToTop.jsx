import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Stänger av browserns automatiska scroll-återställning
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Säker scroll efter render
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

  }, [location.pathname]);

  return null;
}