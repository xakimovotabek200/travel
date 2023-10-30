import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/home";
import About from "./pages/about/About";
import HomeRoutes from "./components/HomeRouters/HomeRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App