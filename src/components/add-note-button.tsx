import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Dialog, DialogHeader, DialogTrigger } from "./ui/dialog";
import PlantNoteForm from "./plant-note-form";
import { usePlantContext } from "@/lib/hooks";

export default function AddNoteButton() {
  const { selectedPlant } = usePlantContext()!;
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-[#FCFAF4] text-[#318F9A] hover:bg-[#FCFAF4]">
          Add Note
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Note For {selectedPlant?.common_name}</DialogTitle>
        </DialogHeader>
        <PlantNoteForm />
      </DialogContent>
    </Dialog>
  );
}
