"use client ";

import React from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { usePlantContext } from "@/lib/hooks";

export default function PlantNoteForm({
  onFormSubmission,
}: {
  onFormSubmission: () => void;
}) {
  const { handleAddNote } = usePlantContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const note = {
      date: formData.get("date") as string,
      note: formData.get("note") as string,
    };

    handleAddNote && handleAddNote(note); // Ensure handleAddNote is defined
    onFormSubmission();
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="date" id="name">
            {getDate()}
          </Label>
        </div>
        <div className="space-y-1">
          <Label htmlFor="note"></Label>
          <Textarea
            id="note"
            name="note"
            rows={5}
            placeholder="add a note about your plant..."
          />
        </div>
      </div>

      <Button type="submit" className="mt-4 self-end">
        Add Note
      </Button>
    </form>
  );
}

function getDate(): string {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}
