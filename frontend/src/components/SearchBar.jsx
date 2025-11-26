import { useState } from "react";
import MealItem from "./MealItem";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);

  const searchMeals = () => {
    fetch(`${import.meta.env.VITE_API_BASE}/search?query=${query}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals || []));
  };

  return (
    <div className="search-section">
      <input
        placeholder="Search meals..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <button onClick={searchMeals}>Search</button>

      <div className="meal-grid">
        {meals.map(m => (
          <MealItem key={m.idMeal} meal={m} />
        ))}
      </div>
    </div>
  );
}
