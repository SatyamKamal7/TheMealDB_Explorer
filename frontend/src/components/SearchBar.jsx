import React, {useState} from 'react'
import axios from 'axios'
const API = import.meta.env.VITE_API_BASE || "http://localhost:8080/api"

export default function SearchBar({onSelect}){
  const [q, setQ] = useState('')
  const [results, setResults] = useState([])

  async function doSearch(e){
    e.preventDefault()
    if(!q) return
    const res = await axios.get(`${API}/search`, { params: { name: q } })
    const data = res.data && typeof res.data === 'string' ? JSON.parse(res.data) : res.data
    setResults(data.meals || [])
  }

  return (
    <div className="card">
      <form onSubmit={doSearch}>
        <input className="search-input" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search meals by name..." />
        <div style={{marginTop:8, display:'flex', gap:8}}>
          <button className="button" type="submit">Search</button>
        </div>
      </form>

      <ul style={{marginTop:10}}>
        {results.map(m => (
          <li key={m.idMeal} style={{cursor:'pointer'}} onClick={()=> onSelect && onSelect(m.idMeal)}>
            {m.strMeal}
          </li>
        ))}
      </ul>
    </div>
  )
}