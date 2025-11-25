import React, {useEffect, useState} from 'react'
import axios from 'axios'
const API = import.meta.env.VITE_API_BASE || "http://localhost:8080/api"

export default function CategoryBrowser({onSelect}){
  const [cats, setCats] = useState([])

  useEffect(()=>{
    axios.get(`${API}/categories`).then(res=>{
      const data = res.data && typeof res.data === 'string' ? JSON.parse(res.data) : res.data
      setCats(data.meals || [])
    })
  },[])

  return (
    <div className="card">
      <h3>Categories</h3>
      <ul className="list">
        {cats.map(c => (
          <li key={c.strCategory} onClick={()=> onSelect && onSelect(null) || window.alert('Click a category to view items from the left panel - or use the filter API directly.')}>
            {c.strCategory}
          </li>
        ))}
      </ul>
    </div>
  )
}