import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/navigation";
import Design from "./pages/design";
import Guide from "./pages/guide";
import Home from "./pages/home";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-tranformer" element={<Design />} />
        <Route path="/complete-guide" element={<Guide />} />
      </Routes>
    </div>
  );
}
