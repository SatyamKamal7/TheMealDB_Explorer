import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealDetails from "./pages/MealDetails";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:id" element={<MealDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
