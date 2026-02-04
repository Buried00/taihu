import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-1000 hover:scale-105">
        <Image
          src="/imgs/hero-restaurant.jpg"
          alt="Restaurant Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Darker gradient*/}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative h-full flex flex-col justify-end items-start px-25 pb-16">
      
        <div className="w-16 h-0.5 bg-[#e7d8a9] mb-4 animate-pulse"></div>
        
        <h1 className="text-[#e7d8a9] text-6xl font-serif tracking-tight mb-2">
          Willkommen im Genuss
        </h1>
        
        <p className="text-white/90 text-xl font-light max-w-xl leading-relaxed">
          Traditionelle Küche trifft auf moderne Eleganz. 
          Entdecken Sie unsere saisonalen Spezialitäten.
        </p>

        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#e7d8a9]/40 to-transparent"></div>
      </div>
    </div>
  );
}
