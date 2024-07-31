"use client";
import { useSearchContext, usePlantContext } from "@/lib/hooks";
import { Search } from "lucide-react";
import SearchResultsDropdown from "./search-results-dropdown";

export default function PlantSearchBar() {
  const { results, searchQuery, handleChangeSearchQuery } = useSearchContext();
  const { handleAddPlant } = usePlantContext();

  return (
    <div className="relative w-[500px] h-12">
      <form
        className="w-full h-full flex items-center"
        onSubmit={(e) => e.preventDefault()}
        action="#"
      >
        <input
          type="search"
          placeholder="Add new plants..."
          className="w-full h-12 pl-4 text-gray-900 bg-transparent border border-green-600/50 rounded-l focus:border-green-600 focus:outline-none focus:shadow-lg transition-all duration-300"
          value={searchQuery}
          onChange={(e) => handleChangeSearchQuery(e.target.value)}
        />
        <button
          type="button"
          className="h-12 px-4 bg-transparent border-l border-green-600/50 text-green-600 cursor-pointer focus:outline-none rounded-r"
          aria-label="Search"
        >
          <Search size={24} />
        </button>
      </form>
      {searchQuery.length > 0 && (
        <SearchResultsDropdown results={results} onAddPlant={handleAddPlant} />
      )}
    </div>
  );
}
