import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/meal/${id}`)
      .then(res => res.json())
      .then(data => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <p>Loading meal details...</p>;

  return (
    <div className="meal-details">
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} className="meal-image" />
      <h3>Instructions</h3>
      <p>{meal.strInstructions}</p>
      <h3>Category: {meal.strCategory}</h3>
      <h3>Area: {meal.strArea}</h3>
    </div>
  );
}