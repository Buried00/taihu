import Image from "next/image";
import HeroImage from "./components/hero/heroImage";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <HeroImage />
    </main>
  );
}
