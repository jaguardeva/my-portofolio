import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MyProject from "./pages/MyProject";
import Contact from "./pages/Contact";

function App() {
  return (
    <Navbar>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<MyProject />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Navbar>
  );
}

export default App;
