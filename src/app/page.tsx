import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Navbar />
      <section className="mx-auto flex max-w-6xl flex-col-reverse gap-2 px-4 pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className="flex flex-col items-center gap-6 pt-8 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <h1 clasaName></h1>
        </div>
      </section>
    </div>
  );
}
