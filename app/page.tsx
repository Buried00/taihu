import Image from "next/image";
import HeroImage from "./components/hero/heroImage";
import Main_Menu from "./components/hero/mainMenu";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <HeroImage />
      <Main_Menu />
    </main>
  );
}
