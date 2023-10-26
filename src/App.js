import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Home5 from "./pages/Home5";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lpl" element={<Home2 />} />
        <Route path="/lucid" element={<Home />} />
        <Route path="/western-digital" element={<Home4 />} />
        <Route path="/tiaa" element={<Home3 />} />  
        <Route path="/xray" element={<Home5 />} />  
      </Routes>
    </Router>
  );
}

export default App;
