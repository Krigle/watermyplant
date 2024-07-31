import { PlantContext } from "@/contexts/plant-context-provider";
import { SearchContext } from "@/contexts/search-context-provider";
import { useContext } from "react";

export function usePlantContext() {
  const context = useContext(PlantContext);
  if (!context) {
    throw new Error(
      "usePlantContext must be used within a PlantContextProvider"
    );
  }
  return context;
}
export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }
  return context;
}
