import { Plant } from "@/lib/types";
import { CirclePlus } from "lucide-react";
import Image from "next/image";

type SearchResultsDropdownProps = {
  results: Plant[];
  onAddPlant: (plant: Plant) => void;
};

export default function SearchResultsDropdown({
  results,
  onAddPlant,
}: SearchResultsDropdownProps) {
  return (
    <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
      {results.length > 0 ? (
        results.map((plant) => {
          const imageUrl =
            plant.default_image?.thumbnail || "/path/to/placeholder-image.jpg";

          return (
            <div
              key={plant.id}
              className="p-4 border-b hover:bg-gray-100 flex justify-between items-center"
            >
              <Image
                src={imageUrl}
                alt={plant.common_name}
                width={45}
                height={45}
                className=" mr-2"
              />
              <span>{plant.common_name}</span>
              <div className="flex flex-col">
                <button
                  onClick={() => onAddPlant(plant)}
                  className="text-green-600 hover:text-[#53a355] flex items-center"
                >
                  Add to My Plants
                  <CirclePlus size={24} className="ml-2 text-[#53a355]" />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="p-4 text-gray-500">No results found.</div>
      )}
    </div>
  );
}
