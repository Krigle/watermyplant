"use client";
import { useRef, useEffect } from "react";
import { usePlantContext, useSearchContext } from "@/lib/hooks";
import { Search } from "lucide-react";
import SearchResultsDropdown from "./search-results-dropdown";

export default function PlantSearchBar() {
  const {
    searchQuery,
    handleChangeSearchQuery,
    results,
    isDropdownVisible,
    setIsDropdownVisible,
  } = useSearchContext();
  const { handleAddPlant } = usePlantContext();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, setIsDropdownVisible]);

  return (
    <div ref={wrapperRef} className="relative w-[500px] h-12">
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
      {isDropdownVisible && searchQuery && (
        <SearchResultsDropdown results={results} onAddPlant={handleAddPlant} />
      )}
    </div>
  );
}
