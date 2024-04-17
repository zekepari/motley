import Image from "next/image";
import Brushes from "./_components/Brushes.jpg";
import Paint from "./_components/Paint.png";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="relative">
      <section className="absolute">
        <Image src={Brushes} alt="Brushes" />
        <Image src={Paint} alt="Paint" className="absolute bottom-0" />
      </section>
      <div className="py-32 space-y-12 container max-w-screen-lg w-full z-20 relative flex flex-col">
        <h1 className="font-black text-6xl drop-shadow text-white">We love empowering others to create beautiful art</h1>
        <button className="bg-gray-400 w-fit px-8 py-4 rounded text-2xl font-semibold shadow-lg flex items-center space-x-4 text-white">
          <span>Flexible Participation</span>
          <ArrowRightIcon className="size-8" />
        </button>
        <h1 className="text-2xl font-bold">Call Motley Collection: <span className="font-medium">0123 456 789</span></h1>
      </div>
    </div>
  );
}