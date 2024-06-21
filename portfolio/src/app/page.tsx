import { Button } from "@/components/ui/button";
import FormEmail from "./form";
import nextjs from "./img/Next-JS.png";
import react from "./img/React-icon.svg.png";
import tailwind from "./img/Tailwind_CSS_Logo.svg.png";
import ts from "./img/ts.png";
import Image from "next/image";
import { CarouselSkills } from "./carroselSkills";
import RoutineDialog from "./routineDialog";
import AcadeDialog from "./acadeDialog";
import DragDropDialog from "./dragdropDialog";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-black text-white min-h-screen w-full px-10 max-lg:p-4 overflow-hidden content-center py-10">
        <header className="pb-10 max-lg:pb-4">
          <div className="container bg-gray-900 mx-auto p-10 max-lg:p-4 rounded text-zinc-50">
            <div className="flex justify-between max-lg:flex-col">
              <h1 className="text-4xl font-bold max-lg:hidden ">ABOUT</h1>
              <h1 className="text-4xl font-bold max-lg:mb-4">
                Guilherme Farias
              </h1>
            </div>
            <h2 className="text-6xl font-extrabold">FRONT END</h2>
            <p className="mt-4 max-w-2xl">
              Front-end development is a crucial aspect of web development that
              focuses on the design and interaction layer of websites and
              applications—it is what users interact with directly. The main
              goal of front-end development is to provide a seamless and
              interactive user experience by implementing designs and managing
              how users interact with web applications.
            </p>
          </div>
        </header>
        <main className="container mx-auto p-0 grid grid-cols-4 gap-4 max-lg:grid-cols-1">
          <div className="rounded h-56  max-lg:col-span-1">
            <h3 className="text-2xl text-center font-bold bg-amarelo-1 rounded-t-md p-4 text-black">
              CONTACT
            </h3>
            <div className="p-3 bg-gray-900 h-24 justify-center items-center flex flex-col text">
              <p className="text-xl">Contact me for more details ...</p>
              <span className="text-sm text-zinc-300">
                Front End Developer / UI UX
              </span>
            </div>
            <p className="p-2 text-center flex justify-center items-center bg-gray-900 rounded-b-md border-t-[1px] border-white h-16 ">
              <FormEmail />
            </p>
          </div>
          <div className="bg-gray-900 rounded h-72 col-span-2 max-lg:col-span-1">
            <h3 className="text-2xl text-center font-bold bg-amarelo-1 rounded-t-md p-4 text-black">
              TECHNOLOGIES
            </h3>
            <div className="p-3 bg-gray-900 h-32 justify-center items-center flex flex-row text max-lg:pl-15 max-lg:pr-2 space-x-4 px-20 max-lg:overflow-y-auto">
              <Image
                src={nextjs}
                width={85}
                height={85}
                alt="NextJs"
                className="bg-white p-1 rounded-full"
              />
              <Image
                src={react}
                width={70}
                height={70}
                alt="React"
                className="p-1"
              />
              <Image
                src={ts}
                width={60}
                height={60}
                alt="Type Script"
                className="p-1"
              />
              <Image
                src={tailwind}
                width={70}
                height={70}
                alt="Tailwind"
                className="p-1"
              />
            </div>
            <div className="bg-white w-full max-lg:col-span-1 h-24 rounded-b-md flex justify-around items-center text-black p-2 ">
              <div className="flex flex-col items-center max-lg:p-1 max-lg:text-sm">
                <p className="font-bold">NextJs</p>
                <p className="font-medium">
                  For building structures and websites
                </p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col items-center max-lg:p-1 max-lg:text-sm">
                <p className="font-bold">Tailwind CSS</p>
                <p className="font-medium">
                  For building the UI and UX of websites
                </p>
              </div>
            </div>
          </div>
          <div className=" row-span-2 max-lg:col-span-1 flex flex-col rounded-md">
            <div className="bg-amarelo-1 justify-around flex flex-col p-4 rounded-t-md h-[55%] max-lg:h-[65%]">
              <h3 className="text-2xl font-bold text-black text-center">
                ABOUT
              </h3>
              <div className="bg-gray-900 rounded-md p-2 ">
                I seek development in a job focused on problem-solving, aimed at
                smart solutions and facilitating company growth with ease in
                decision-making
              </div>
              <div>
                <div className="flex bg-zinc-50 justify-center space-x-4 text-black font-bold rounded-md border-b-[1px] border-black shadow-[0px_1px_10px_0px_rgba(0,0,0,0.3)]">
                  <p className="text-center">Smart Work</p>
                </div>
              </div>
            </div>
            <div className="h-[45%] max-lg:h-[20vh] bg-zinc-50 border-t-[2px] border-white rounded-b-md">
              <h1 className="flex-col bg-gray-900 font-bold text-2xl py-4 items-center justify-around flex text-zinc-50">
                Skills
              </h1>
              <div className="flex justify-center items-center h-[68%]">
                <CarouselSkills />
              </div>
            </div>
          </div>
          <div className="col-span-1 p-4 bg-amarelo-1 rounded h-56 text-black">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold max-lg:text-xl">PROJECT</h2>
              <h3 className="text-xl max-lg:text-base text-center font-medium">
                One project to help with your daily routine
              </h3>
            </div>
            <div className="flex justify-center items-center w-full h-20">
              <RoutineDialog />
            </div>
          </div>
          <div className="col-span-1 p-4 bg-gray-900 rounded h-56 text-black">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold max-lg:text-xl text-zinc-50">
                PROJECT
              </h2>
              <h3 className="text-xl max-lg:text-base text-center font-medium text-zinc-50">
                A project for managing a group of gyms
              </h3>
            </div>
            <div className="flex justify-center items-center w-full h-20">
              <AcadeDialog />
            </div>
          </div>
          <div className="col-span-1 p-4 bg-amarelo-1 rounded h-56 text-black">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold max-lg:text-xl">PROJECT</h2>
              <h3 className="text-xl max-lg:text-base text-center font-medium">
                A project with many APIs for developing applications
              </h3>
            </div>
            <div className="flex justify-center items-center w-full h-20">
              <DragDropDialog />
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
