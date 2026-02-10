"use client";
import { Recipe } from "../../page";

export default function RecipeCarousel11() {
  const recipes: Recipe[] = [
    { title: "Rinderfilet", desc: "Mit Trüffelkruste", price: "40€", img: "/imgs/dish1.jpg" },
    { title: "Lachs-Tartar", desc: "Frischer Wildlachs", price: "25€", img: "/imgs/dish2.jpg" },
    { title: "Pasta Paradiso", desc: "Hausgemachte Pasta", price: "22€", img: "/imgs/dish3.jpg" },
    { title: "Zitronen Sorbet", desc: "Sizilianische Zitronen", price: "15€", img: "/imgs/dish4.jpg" },
    { title: "Sauerbraten", desc: "Rinderbraten in Essig-Beizen-Marinade mit Lebkuchensauce", price: "22€", img: "/imgs/dish5.jpg" },
  ];

  return (
    <section id="menu" className="py-20 bg-[#1a1a1a]">
      <div className="mx-25 mb-10">
        <h2 className="text-[#e7d8a9] text-4xl font-serif">Saisonal Empfohlen</h2>
      </div>

      <div className="flex gap-8 overflow-x-auto px-25 pb-10 scrollbar-hide snap-x snap-mandatory">
        {recipes.map((recipe, index) => (
          <div key={index} className="min-w-75 h-100 relative group overflow-hidden rounded-lg snap-center bg-zinc-900">
            <div className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              <img src={recipe.img} alt={recipe.title} className="w-full h-full object-cover" />
            </div>

            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-linear-to-t from-black via-transparent to-transparent">
              <span className="text-[#e7d8a9] text-sm uppercase tracking-widest mb-2">{recipe.price}</span>
              <h3 className="text-white text-2xl font-bold mb-1">{recipe.title}</h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                {recipe.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}