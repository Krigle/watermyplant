import React from "react";
import { Label } from "./ui/label";

export default function PlantNoteForm() {
  return (
    <form>
      <Label htmlFor="name"></Label>
      <Label htmlFor="date">{Date()}</Label>
    </form>
  );
}
