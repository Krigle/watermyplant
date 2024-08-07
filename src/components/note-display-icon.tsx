import React, { useState } from "react";
import { ScrollText } from "lucide-react";
import { usePlantContext } from "@/lib/hooks";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import NoteDetails from "./note-details";

export default function NoteDisplayIcon() {
  const { selectedPlant } = usePlantContext();

  return (
    <div>
      {selectedPlant?.notes.map((note) => (
        <div key={note.id} className="flex flex-row border-black mt-2">
          <h1>{note.date}</h1>
          <Dialog>
            <DialogTrigger asChild>
              <ScrollText className="bg-transparent text-[#318F9A] hover:shadow-xl m-1" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{note.date}</DialogTitle>
              </DialogHeader>
              <NoteDetails note={note} />
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
}
