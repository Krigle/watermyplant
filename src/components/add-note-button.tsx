"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PlantNoteForm from "./plant-note-form";
import { usePlantContext } from "@/lib/hooks";
import { useState } from "react";

export default function AddNoteButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { selectedPlant } = usePlantContext()!;
  return (
    <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogTrigger>
        <Button
          className="bg-[#FCFAF4] text-[#318F9A] hover:bg-[#FCFAF4]"
          onClick={() => setIsFormOpen(true)}
        >
          Add Note
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Note For {selectedPlant?.common_name}</DialogTitle>
        </DialogHeader>
        <PlantNoteForm onFormSubmission={() => setIsFormOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
