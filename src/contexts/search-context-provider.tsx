"use client";

import { Plant } from "@/lib/types";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type SearchContextProviderProps = {
  initialData: Plant[];
  children: ReactNode;
};

type TSearchContext = {
  searchQuery: string;
  handleChangeSearchQuery: (newValue: string) => void;
  results: Plant[];
  isDropdownVisible: boolean;
  setIsDropdownVisible: (visible: boolean) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
  initialData,
  children,
}: SearchContextProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [results, setResults] = useState<Plant[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filteredResults = initialData.filter((plant) =>
        plant.common_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);
      setIsDropdownVisible(true);
    } else {
      setResults([]);
      setIsDropdownVisible(false);
    }
  }, [searchQuery, initialData]);

  const handleChangeSearchQuery = (newValue: string) => {
    setSearchQuery(newValue);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        handleChangeSearchQuery,
        results,
        isDropdownVisible,
        setIsDropdownVisible,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook to use the SearchContext
export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchContextProvider");
  }
  return context;
}
