"use client";

export default function AboutUs() {
  const stats = [
    { label: "Flughöhe", value: "3.000m" },
    { label: "Flotte", value: "3 Schiffe" },
    { label: "Sterne", value: "2 Michelin" },
    { label: "Gegründet", value: "1923 / 2026" },
  ];

  return (
    <section id="about" className="py-24 bg-[#1a1a1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-25">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-[#e7d8a9] text-4xl md:text-5xl font-serif leading-tight">
              Kulinarik über den <br /> Wolken seit Generationen
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Willkommen an Bord der exklusivsten Restaurant-Flotte der Welt. 
              Unsere Geschichte begann mit der Vision, die Eleganz der klassischen Luftschifffahrt 
              mit moderner Haute Cuisine zu verbinden. 
            </p>
            <p className="text-gray-400">
              In unseren Gondeln erleben Sie nicht nur ein Menü, sondern eine Reise durch die Atmosphäre. 
              Jedes Gericht wird in unserer Bordküche frisch zubereitet, während Sie lautlos 
              über die schönsten Landschaften Europas gleiten.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-[#e7d8a9]/30 pl-4">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-[#e7d8a9] uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Image*/}
          <div className="relative group">
            <div className="absolute -inset-4 border border-[#e7d8a9]/20 rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <div className="relative h-125 w-full bg-zinc-900 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/imgs/airship-interior.jpg"
                alt="Airship Interior" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-[#e7d8a9] font-serif italic text-xl">"Der Himmel ist kein Ort, sondern ein Erlebnis."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
