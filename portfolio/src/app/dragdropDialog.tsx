"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import drag from "./img/dragdrop.png";

export default function DragDropDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-gray-900 w-[100%] max-lg:text-xl text-2xl mt-4 text-zinc-50 hover:bg-yellow-800 p-2 rounded-xl transition-all">
          View a project
        </DialogTrigger>
        <DialogContent className="bg-zinc-400 border-none w-[100vw]">
          <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300  overflow-y-scroll h-[50vh]">
            <h1 className="text-xl font-medium">Site da gestão de academia</h1>
            <p className="mt-2">
              Projeto criado trabalhar com Drag and Drop e ajuste de várias APIs
            </p>
            <p className="mb-4 mt-2">
              Para a criação deste site foi utilizado alguns componentes do
              HelloPangea pois, esta biblioteca que proporciona o funcionamento
              do Drag and Drop. Com isso, foi criado um servidor utilizando o
              json.server, já que esta biblioteca disponiboliza um servidor
              local para fazermos requisições via API.
            </p>
            <div className="mr-4 space-y-2">
              <Image
                src={drag}
                width={1000}
                height={2000}
                alt="NextJs"
                className="bg-white p-1 rounded-sm"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
