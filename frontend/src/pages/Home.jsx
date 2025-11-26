import CategoryBrowser from "../components/CategoryBrowser";
import RandomMeal from "../components/RandomMeal";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="home-container">
      <SearchBar />
      <RandomMeal />
      <CategoryBrowser />
    </div>
  );
}
