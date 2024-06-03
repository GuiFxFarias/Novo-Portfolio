"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import routine from "./img/acade.png";
import home from "./img/acade02.png";
import createRoutine from "./img/acade03.png";
export default function AcadeDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-amarelo-1 text-black text-2xl hover:text-white w-[100%] max-lg:text-xl mt-4 font-medium hover:bg-gray-400 p-2 rounded-xl transition-all">
          View a project
        </DialogTrigger>
        <DialogContent className="bg-zinc-400 border-none">
          <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300  overflow-y-scroll h-[50vh]">
            <h1 className="text-xl font-medium">Site da gestão de academia</h1>
            <p className="mt-2">
              Projeto criado para uma empresa de gestão de academias que cria
              planos e as gerencias
            </p>
            <p className="mb-4 mt-2">
              Para a criação deste site foi utilizado componentes do ShadCN,
              customizações do mesmo, criação de varios assets como: CRUD de
              usuários, de academias, de formulários e etc. Foi feito várias
              manipulações de estados pelo searchParams, várias requisições e
              etc.
            </p>
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
