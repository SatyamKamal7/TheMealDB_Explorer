import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function CategoryBrowser() {
  const [category, setCategory] = useState("Beef");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/search?category=${category}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals || []));
  }, [category]);

  return (
    <div>
      <h2>Browse by Category</h2>

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Beef</option>
        <option>Chicken</option>
        <option>Dessert</option>
        <option>Vegetarian</option>
      </select>

      <div className="meal-grid">
        {meals.map(meal => (
          <MealItem key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}
