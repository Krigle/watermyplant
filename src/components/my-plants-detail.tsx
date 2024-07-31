"use client";

import Image from "next/image";
import { Droplet, Sprout } from "lucide-react";
import { usePlantContext } from "@/lib/hooks";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PlantNoteForm from "./plant-note-form";

export default function MyPlantsDetails() {
  const { selectedPlant, watered, toggleWatered } = usePlantContext()!;

  return (
    <>
      {selectedPlant ? (
        <section className="flex flex-col h-full w-full shadow-lg">
          <section>
            <div className="flex items-center justify-evenly border-[#9eb9c0] px-8 py-5 border-b shadow-sm bg-[#fefefe]">
              <Image
                src={selectedPlant?.default_image?.thumbnail}
                alt="Plant Image"
                width={75}
                height={75}
                className="object-cover h-[75px] w-[75px]"
              />
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-semibold leading-7 ml-5">
                  {selectedPlant?.common_name}
                </h2>
                <p>{selectedPlant?.scientific_name.join(", ")}</p>
              </div>
              <div className="flex flex-col items-end">
                <button onClick={toggleWatered}>
                  <Droplet
                    size={32}
                    className={`text-[#318F9A] ${
                      watered ? "bg-[#318F9A] text-[#fefefe]" : "bg-transparent"
                    }`}
                  />
                </button>
                <h3>Watered? {watered ? "Yes" : "No"}</h3>
              </div>
            </div>
          </section>

          <section className="flex flex-row">
            <div className="flex flex-col space-y-3 justify-evenly py-10 px-5 bg-[#fefefe]/75 backdrop-blur-lg transition-all">
              <div className="mr-10">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold">
                    Sunlight:{" "}
                    <span className="font-light">
                      {selectedPlant?.sunlight.join(", ")}
                    </span>
                  </h3>
                </div>
                <div className="mt-2 text-lg font-semibold">
                  <h3>
                    Watering Frequency:{" "}
                    <span className="font-light">
                      {selectedPlant?.watering.toLocaleLowerCase()}
                    </span>
                  </h3>
                </div>
              </div>

              <div className="mr-10">
                <ul>
                  <li>
                    <p>Last Watered:</p>
                  </li>
                  <li>
                    <p>Next Watering:</p>
                  </li>
                </ul>
              </div>

              <div className="mr-10 flex flex-col">
                <ul className="flex items-center">
                  <li className="flex flex-col items-center">
                    <p className="text-center mb-2">Watering Streak:</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Droplet className="text-[#318F9A]" />
                      <p>DAYS</p>
                      <Sprout className="text-[#53a355]" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-1 text-center bg-[#fefefe]/75 backdrop-blur-lg transition-all px-7 py-5 border border-black">
              <Dialog>
                <DialogTrigger>
                  <Button className="bg-[#FCFAF4] text-[#318F9A] hover:bg-[#FCFAF4]">
                    Add Note
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Note</DialogTitle>
                  </DialogHeader>
                  <PlantNoteForm />
                </DialogContent>
              </Dialog>
            </div>
          </section>

          <section className="flex-1 text-center bg-[#fefefe]/75 backdrop-blur-lg transition-all px-7 py-5">
            <div>Post pictures / Feed Component</div>
          </section>
        </section>
      ) : null}
    </>
  );
}

// Clean up this component by making seperate components for each section within this file. Pass the props to each component and type them as props
// vid 286
