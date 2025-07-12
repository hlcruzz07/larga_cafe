import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Menu from "./pages/Menu";
// import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/menu" element={<Menu />} /> */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
