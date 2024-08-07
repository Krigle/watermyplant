"use client";

import { Plant } from "@/lib/types";
import { createContext, useState, useContext } from "react";

type PlantContextProviderProps = {
  data: Plant[];
  children: React.ReactNode;
};

type TPlantContext = {
  plants: Plant[];
  selectedPlantId: number | null;
  handleChangeSelectedPlantId: (id: number) => void;
  selectedPlant: Plant | undefined;
  userPlantStats: number;
  handleAddPlant: (plant: Plant) => void;
  myPlants: Plant[];
  watered: boolean;
  toggleWatered: () => void; // Changed from isWatered to toggleWatered
  handleDeletePlant: (id: number) => void;
};

export const PlantContext = createContext<TPlantContext | null>(null);

export default function PlantContextProvider({
  data,
  children,
}: PlantContextProviderProps) {
  const [plants, setPlants] = useState<Plant[]>(
    Array.isArray(data) ? data : []
  );

  //State

  const [selectedPlantId, setSelectedPlantId] = useState<number | null>(null);
  const [myPlants, setMyPlants] = useState<Plant[]>([]);
  const [watered, setWatered] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");
  // const [notes, setNotes] = useState<string[]>(selectedPlant?.note || []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  //Derived State

  const selectedPlant = Array.isArray(plants)
    ? plants.find((plant) => plant.id === selectedPlantId)
    : undefined;

  if (selectedPlantId !== null && !selectedPlant) {
    throw new Error(`Plant with ID ${selectedPlantId} not found`);
  }

  const userPlantStats = myPlants.length;

  //Event Handlers

  const handleChangeSelectedPlantId = (id: number) => {
    setSelectedPlantId(id);
  };

  const handleAddPlant = (plant: Plant) => {
    setMyPlants((prevMyPlants) => {
      if (!prevMyPlants.some((p) => p.id === plant.id)) {
        return [...prevMyPlants, plant];
      }
      return prevMyPlants;
    });
  };

  const handleDeletePlant = (id: number) => {
    setMyPlants((prev) => {
      const updatedPlants = prev.filter((plant) => plant.id !== id);
      if (selectedPlantId === id) {
        setSelectedPlantId(null); // Unselect plant if deleted
      }
      return updatedPlants;
    });
  };

  const toggleWatered = () => {
    setWatered((prev) => !prev);
  };

  const handleAddNote = async (note: string) => {
    setNotes(note);
  };

  return (
    <PlantContext.Provider
      value={{
        plants,
        selectedPlantId,
        handleAddPlant,
        handleChangeSelectedPlantId,
        selectedPlant,
        userPlantStats,
        myPlants,
        watered,
        toggleWatered,
        handleDeletePlant,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
}
