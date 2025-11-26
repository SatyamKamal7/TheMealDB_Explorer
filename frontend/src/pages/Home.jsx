import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryBrowser from "../components/CategoryBrowser";
import RandomMeal from "../components/RandomMeal";

function Home() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="p-6">
      <SearchBar setSearchResults={setSearchResults} />

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {searchResults.map((meal) => (
            <RandomMeal key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        <>
          <CategoryBrowser />
          <RandomMeal />
        </>
      )}
    </div>
  );
}

export default Home;
