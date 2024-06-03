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
import routine from "./img/Routine.png";
import home from "./img/home.png";
import createRoutine from "./img/createRoutine.png";
export default function RoutineDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-gray-900 w-[100%] max-lg:text-xl text-2xl mt-4 text-zinc-50 hover:bg-yellow-800 p-2 rounded-xl transition-all">
          View a project
        </DialogTrigger>
        <DialogContent className="bg-zinc-400 border-none">
          <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300  overflow-y-scroll h-[50vh]">
            <h1 className="text-xl font-medium">Site de rotina</h1>
            <p className="mt-2">
              Para a criação de uma rotina, basta adicionar o nome da tarefa do
              dia e a hora
            </p>
            <p className="mb-4 mt-2">
              Para a criação deste site foi utilizado muitos estados do useState
              e a principal ferramenta utilizada foi o localStorage. Com a
              manipulação dele consegui criar um sistema de banco de dados para
              guardar as tarefas que forem adicionados
            </p>
            <a
              href="https://project-routine-l2rp3dt2b-guifxfarias.vercel.app/"
              className="underline font-bold"
              target="_blank"
              rel="noreferrer"
            >
              Link para o site
            </a>
            <div className="mr-4 space-y-2">
              <Image
                src={home}
                width={1000}
                height={2000}
                alt="NextJs"
                className="bg-white p-1 rounded-sm"
              />
              <Image
                src={createRoutine}
                width={1000}
                height={2000}
                alt="NextJs"
                className="bg-white p-1 rounded-sm"
              />
              <Image
                src={routine}
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
