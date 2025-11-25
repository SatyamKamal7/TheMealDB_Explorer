import React, {useEffect, useState} from 'react'
import axios from 'axios'
const API = import.meta.env.VITE_API_BASE || "http://localhost:8080/api"

export default function MealDetail({meal}){
  const [data, setData] = useState(null)

  useEffect(()=>{
    if(!meal) return setData(null)
    axios.get(`${API}/meal/${meal}`).then(res=>{
      const d = res.data && typeof res.data === 'string' ? JSON.parse(res.data) : res.data
      setData(d.meals && d.meals[0])
    })
  },[meal])

  if(!data) return <div className="card"><em>Select a meal to see details</em></div>

  // build ingredients list
  const ingredients = []
  for(let i=1;i<=20;i++){
    const ing = data[`strIngredient${i}`]
    const mea = data[`strMeasure${i}`]
    if(ing && ing.trim()) ingredients.push(`${mea || ''} ${ing}`.trim())
  }

  return (
    <div>
      <div className="card">
        <h2 className="meal-title">{data.strMeal}</h2>
        <img className="img" src={data.strMealThumb} alt={data.strMeal} />
        <div className="section"><strong>Category:</strong> {data.strCategory} • <strong>Area:</strong> {data.strArea}</div>
        <div className="section"><h4>Ingredients</h4><ul>{ingredients.map((it,i)=><li key={i}>{it}</li>)}</ul></div>
        <div className="section"><h4>Instructions</h4><p style={{whiteSpace:'pre-wrap'}}>{data.strInstructions}</p></div>
        {data.strYoutube && (
          <div className="section">
            <h4>Video</h4>
            <iframe title="youtube" width="100%" height="315" src={data.strYoutube.replace('watch?v=','embed/')} frameBorder="0"></iframe>
          </div>
        )}
      </div>
    </div>
  )
}