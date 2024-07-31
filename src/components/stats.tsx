"use client";

import { Sprout } from "lucide-react";
import { usePlantContext } from "@/lib/hooks";

export default function Stats() {
  const { userPlantStats } = usePlantContext();
  return (
    <section className="text-center">
      <p className="text-xl leading-6">You are watering</p>
      <div className="flex justify-center items-center mt-2">
        <span className="text-3xl flex items-center relative before:absolute before:bg-green-600/50 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500 cursor-none">
          {userPlantStats} plants
          <Sprout className="ml-2 text-green-600" />
        </span>
      </div>
    </section>
  );
}
