"use client";

import { usePlantContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function MyPlantsList() {
  const {
    myPlants,
    selectedPlantId,
    handleChangeSelectedPlantId,
    handleDeletePlant,
  } = usePlantContext();

  if (!Array.isArray(myPlants)) {
    return <p>No plants available.</p>;
  }

  return (
    <ul className="bg-[#d2e3de] border-b border-[#9eb9c0]/[0.8]">
      {myPlants.map((plant) => (
        <li key={plant.id} className="m-1">
          <div className="flex items-center justify-between p-1">
            <button
              className={cn("flex items-center w-full text-base gap-3", {
                "bg-[#9eb9c0]": selectedPlantId === plant.id,
              })}
              onClick={() => handleChangeSelectedPlantId(plant.id)}
            >
              <Image
                src={plant.default_image.thumbnail}
                alt={plant.common_name || "Plant Image"}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div className=" flex-grow">
                <span className="font-semibold">
                  {plant.common_name || "Unknown Plant"}
                </span>
                <span className="block mt-1 text-sm text-gray-600">
                  {plant.scientific_name.join(", ")}
                </span>
              </div>
              <button
                onClick={() => handleDeletePlant(plant.id)}
                className="text-red-700 ml-2"
              >
                <Trash2 />
              </button>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
