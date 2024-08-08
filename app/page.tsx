import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-primary-green">
      <BackgroundBeams className=""/>
      <section className="w-full h-full items-center justify-center">
        <h2 className="text-5xl text-green-100">Joeteck</h2>
      </section>

    </main>
  );
}
