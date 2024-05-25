"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
export default function AcadeDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-amarelo-1 text-black hover:text-white w-[70%] text-2xl mt-10 font-medium hover:bg-gray-400 p-2 rounded-xl transition-all">
          View a project
        </DialogTrigger>
        <DialogContent className="bg-zinc-400 border-none"></DialogContent>
      </Dialog>
    </>
  );
}
