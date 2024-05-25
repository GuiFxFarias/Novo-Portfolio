"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export default function RoutineDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-gray-900 w-[70%] text-2xl mt-10 text-zinc-50 hover:bg-yellow-800 p-2 rounded-xl transition-all">
          View a project
        </DialogTrigger>
        <DialogContent className="bg-zinc-400 border-none"></DialogContent>
      </Dialog>
    </>
  );
}
