import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealDetails from "./pages/MealDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#2b0a12] text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:id" element={<MealDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
