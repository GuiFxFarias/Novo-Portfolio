import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <div className="bg-black text-white min-h-screen w-full py-16 px-10">
        <nav className="container mx-auto p-0">
          <h1 className="text-4xl">Guilherme Farias</h1>
        </nav>
        <header className="py-10 ">
          <div className="container bg-yellow-500 mx-auto p-10 rounded text-black">
            <h1 className="text-4xl font-bold">ABOUT</h1>
            <h2 className="text-6xl font-extrabold">FRONT-END</h2>
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
        <main className="container mx-auto p-0 grid grid-cols-4 gap-4">
          <div className=" rounded h-42">
            <h3 className="text-2xl text-center font-bold bg-yellow-500 rounded-t-md p-4 text-black">
              ABOUT
            </h3>
            <p className="p-3 bg-gray-600">Contact me for more details ...</p>
            <p className="p-2 text-center bg-gray-900 rounded-b-md">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Send me email
              </Button>
            </p>
          </div>
          <div className="p-4 bg-yellow-500 rounded h-42 col-span-2">
            <h3 className="text-2xl font-bold text-black">GOALS</h3>
            <p className="mt-2 text-black">Description about the goals...</p>
          </div>
          <div className="p-4 bg-gray-800 rounded h-42 row-span-2">
            <h3 className="text-2xl font-bold">TECHNOLOGIES</h3>
            <p className="mt-2">Description about technologies...</p>
          </div>
          <div className="col-span-1 p-4 bg-yellow-500 rounded h-42 text-black">
            <h3 className="text-2xl font-bold">PROJECTS</h3>
          </div>
          <div className="p-4 bg-gray-800 rounded h-42 ">
            <h3 className="text-2xl font-bold">CONTACT</h3>
            <p className="mt-2">Contact information...</p>
          </div>
          <div className="p-4 bg-gray-800 rounded h-42 ">
            <h3 className="text-2xl font-bold">CONTACT</h3>
            <p className="mt-2">Contact information...</p>
          </div>
        </main>
      </div>
    </main>
  );
}
