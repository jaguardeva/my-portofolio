import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MyProject from "./pages/MyProject";
import Contact from "./pages/Contact";
import Card from "./components/Projects/Card";

function App() {
  return (
    <Navbar>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<MyProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Navbar>
  );
}

export default App;
