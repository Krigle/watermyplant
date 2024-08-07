import { PlantNote } from "@/lib/types";

export default function NoteDetails({ note }: { note: PlantNote }) {
  return (
    <div>
      <p>{note.date}</p>
      <p>{note.note}</p>
    </div>
  );
}
