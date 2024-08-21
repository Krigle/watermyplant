"use server";

import prisma from "@/lib/db";
import { Plant, PlantImage, PlantNote } from "@/lib/types"; // Import the correct types
import { revalidatePath } from "next/cache";

// Function to validate and sanitize plant data
function validateAndSanitizePlantData(plantData: Plant): Plant {
  return {
    id: plantData.id || 0,
    common_name: plantData.common_name || "",
    scientific_name: Array.isArray(plantData.scientific_name)
      ? plantData.scientific_name.join(", ")
      : plantData.scientific_name || "",
    other_name: "",
    cycle: plantData.cycle || "",
    watering: plantData.watering || "",
    sunlight: Array.isArray(plantData.sunlight) ? plantData.sunlight : [],
    default_image: plantData.default_image || {
      image_id: 0,
      license: 0,
      license_name: "",
      license_url: "",
      original_url: "",
      regular_url: "",
      medium_url: "",
      small_url: "",
      thumbnail: "",
    },
    notes: Array.isArray(plantData.notes) ? plantData.notes : [],
  };
}

export async function addPlant(plantData: Plant) {
  // Sanitize plantData to ensure it's compatible with your schema
  const validPlantData = validateAndSanitizePlantData(plantData);

  let plant;
  plant = await prisma.plant.create({
    data: {
      common_name: validPlantData.common_name,
      scientific_name: validPlantData.scientific_name, // Now properly sanitized as a string
      watering: validPlantData.watering,
      cycle: validPlantData.cycle,
      sunlight: Array.isArray(validPlantData.sunlight)
        ? validPlantData.sunlight.join(", ")
        : "",
      expiresAt: new Date(), // Add the expiresAt property with the current date
    },
  });
  // return plant;

  // Revalidate the cache for the plants page
  revalidatePath("/app", "layout");
}

export async function deletePlant() {}

export async function addNote() {}

export async function deleteNote() {}
