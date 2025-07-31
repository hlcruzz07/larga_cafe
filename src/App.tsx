import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
// import Menu from "./pages/Menu";
import PageSpinner from "./components/PageSpinner";
import AOS from "aos";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (!loading) {
      setRouteLoading(true);
      const timer = setTimeout(() => setRouteLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, loading]);

  if (loading || routeLoading) return <PageSpinner />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/menu" element={<Menu />} /> */}
    </Routes>
  );
}
