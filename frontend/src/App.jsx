import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import CategoryBrowser from './components/CategoryBrowser'
import RandomMeal from './components/RandomMeal'
import MealDetail from './components/MealDetail'

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080/api"

export default function App(){
  const [selectedMeal, setSelectedMeal] = useState(null)

  return (
    <div className="app">
      <header className="topbar">
        <h1>TheMealDB Explorer</h1>
        <p className="tag">Simple, fast recipe discovery — maroon themed UI</p>
      </header>

      <main className="container">
        <div className="left">
          <SearchBar onSelect={setSelectedMeal} />
          <RandomMeal onSelect={setSelectedMeal} />
          <CategoryBrowser onSelect={setSelectedMeal} />
        </div>
        <div className="right">
          <MealDetail meal={selectedMeal} />
        </div>
      </main>

      <footer className="footer">Built with ❤️ • Proxy API (Java Spring Boot)</footer>
    </div>
  )
}