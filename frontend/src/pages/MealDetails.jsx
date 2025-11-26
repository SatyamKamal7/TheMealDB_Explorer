import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/meal/${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data));
  }, [id]);

  if (!meal) return <p className="text-center mt-20">Loading meal...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-3">{meal.strMeal}</h1>
      <img src={meal.strMealThumb} className="rounded-lg mb-5" />

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="leading-relaxed">{meal.strInstructions}</p>
    </div>
  );
}

export default MealDetails;
