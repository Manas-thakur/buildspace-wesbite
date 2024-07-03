import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Demo from "./pages/Demo";
import { Toaster } from "./components/ui/toaster";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <Toaster />
    </div>
  );
}
