import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import PhotoGallery from "./components/elements/PhotoGallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallary" element={<PhotoGallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
