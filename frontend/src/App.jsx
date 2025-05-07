import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/user/home";
import Package from "./pages/user/package";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import { Gallery } from "./pages/user/gallery";
import About from "./pages/user/about";

function App() {
  return (
    <BrowserRouter>
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <Navbar />
      </div>
      <div className="mt-[60px]">
        <Routes path="/">
          <Route path="/*" element={<Home />} />
          <Route path="/package" element={<Package />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<About />} />
        </Routes>
      </div>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
