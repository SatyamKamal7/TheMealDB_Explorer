import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function RandomMeal() {
  const [meal, setMeal] = useState(null);

  const fetchRandom = () => {
    fetch(`${import.meta.env.VITE_API_BASE}/random`)
      .then(r => r.json())
      .then(d => setMeal(d.meals[0]));
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <div>
      <h2>Random Meal</h2>
      <button onClick={fetchRandom}>New Random Meal</button>

      {meal && <MealItem meal={meal} />}
    </div>
  );
}
