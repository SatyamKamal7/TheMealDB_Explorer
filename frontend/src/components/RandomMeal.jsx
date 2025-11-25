import React from 'react'
import axios from 'axios'
const API = import.meta.env.VITE_API_BASE || "http://localhost:8080/api"

export default function RandomMeal({onSelect}){
  async function fetchRandom(){
    const res = await axios.get(`${API}/random`)
    const data = res.data && typeof res.data === 'string' ? JSON.parse(res.data) : res.data
    const meal = data.meals && data.meals[0]
    if(meal && onSelect) onSelect(meal.idMeal)
  }

  return (
    <div className="card">
      <h3>Feeling hungry?</h3>
      <p>Get a surprise meal suggestion.</p>
      <button className="button" onClick={fetchRandom}>I'm feeling hungry 🍽️</button>
    </div>
  )
}