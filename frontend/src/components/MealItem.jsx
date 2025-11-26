import { Link } from "react-router-dom";

export default function MealItem({ meal }) {
  return (
    <div className="meal-card">
      <Link to={`/meal/${meal.idMeal}`}>
        <img src={meal.strMealThumb} />
        <h3>{meal.strMeal}</h3>
      </Link>
    </div>
  );
}
