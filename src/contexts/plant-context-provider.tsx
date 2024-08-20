"use client";

import { addPlant } from "@/actions/actions";
import { Plant, PlantNote } from "@/lib/types"; // Import the correct types
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
  toggleWatered: () => void;
  handleDeletePlant: (id: number) => void;
  handleAddNote: (note: Omit<PlantNote, "id">) => void; // Note should be of type PlantNote
  notes: PlantNote[]; // Note array should be of type PlantNote[]
  isLoading: boolean;
  error: string | null;
  handleDeleteNote: (id: string) => void;
};

export const PlantContext = createContext<TPlantContext | null>(null);

export default function PlantContextProvider({
  data,
  children,
}: PlantContextProviderProps) {
  // Ensure each plant has a notes property
  const initialData = data.map((plant) => ({
    ...plant,
    notes: plant.notes ?? [], // Initialize notes to an empty array if undefined
  }));

  const [plants, setPlants] = useState<Plant[]>(
    Array.isArray(initialData) ? initialData : []
  );

  // State
  const [selectedPlantId, setSelectedPlantId] = useState<number | null>(null);
  const [myPlants, setMyPlants] = useState<Plant[]>([]);
  const [watered, setWatered] = useState<boolean>(false);
  const [notes, setNotes] = useState<PlantNote[]>([]); // Initialize notes as empty array
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Derived State
  const selectedPlant = plants.find((plant) => plant.id === selectedPlantId);

  const userPlantStats = myPlants.length;

  // Event Handlers
  const handleChangeSelectedPlantId = (id: number) => {
    setSelectedPlantId(id);
  };

  const handleAddPlant = async (plant: Plant) => {
    setMyPlants((prevMyPlants) => {
      if (!prevMyPlants.some((p) => p.id === plant.id)) {
        return [...prevMyPlants, plant];
      }
      return prevMyPlants;
    });

    await addPlant(plant);
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

  const generateUniqueId = () => {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  };

  const handleAddNote = (note: Omit<PlantNote, "id">) => {
    if (selectedPlant) {
      const newNote: PlantNote = {
        ...note,
        id: generateUniqueId(),
      };
      const updatedPlantNotes = {
        ...selectedPlant,
        notes: [...(selectedPlant.notes || []), newNote], // Ensure notes is an array
      };
      setPlants(
        plants.map((plant) =>
          plant.id === selectedPlant.id ? updatedPlantNotes : plant
        )
      );
      setNotes(updatedPlantNotes.notes); // Update the notes state
    }
  };

  const handleDeleteNote = (id: string) => {
    if (selectedPlant) {
      const updatedPlantNotes = {
        ...selectedPlant,
        notes: selectedPlant.notes?.filter((note) => note.id !== id) || [], // Ensure notes is an array
      };
      setPlants(
        plants.map((plant) =>
          plant.id === selectedPlant.id ? updatedPlantNotes : plant
        )
      );
      setNotes(updatedPlantNotes.notes); // Update the notes state
    }
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
        handleAddNote,
        notes,
        isLoading,
        error,
        handleDeleteNote,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
}
