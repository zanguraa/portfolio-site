import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

interface Props {
  name: string;
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#1E1E1E] ">
      <div className="  w-full items-center justify-between font-mono text-sm ">
        <Header />
        <Hero name="Valeri" />
        <Skills />
      </div>
    </main>
  );
}
