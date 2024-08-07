import { usePlantContext } from "@/lib/hooks";
import { PlantNote } from "@/lib/types";
import { Trash2 } from "lucide-react";

export default function NoteDetails({ note }: { note: PlantNote }) {
  const { handleDeleteNote } = usePlantContext()!;
  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <p className="font-semibold text-lg">{note.date}</p>
      <p className="mt-2 text-gray-600">{note.note}</p>
      {note.note && (
        <div className="mt-4 flex justify-end">
          <button onClick={() => handleDeleteNote(note.id)}>
            <Trash2 className="text-red-500 cursor-pointer" />
          </button>
        </div>
      )}
    </div>
  );
}
