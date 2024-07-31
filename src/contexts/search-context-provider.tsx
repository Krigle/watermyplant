"use client";

import { Plant } from "@/lib/types";
import {
  createContext,
  useContext,
  useEffect,
  useState,
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
};

export const SearchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
  initialData,
  children,
}: SearchContextProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [results, setResults] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setIsLoading(true);
      const filteredResults = initialData.filter((plant) =>
        plant.common_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);
      setIsLoading(false);
    } else {
      setResults(initialData);
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
