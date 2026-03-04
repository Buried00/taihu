"use client";
import { Recipe } from "@/app/page";   // подправь путь, если нужно"../../page";

interface RecipeCarouselProps {
  onAdd: (recipe: Recipe) => void;
}
export default function RecipeCarousel7({ onAdd }: RecipeCarouselProps) {
  const recipes: Recipe[] = [
    { title: "Рис жасминовый на пару", desc: "200 г", price: "180 руб.", img: "/imgs/dish31.jpg" },
    { title: "Рис жареный с яйцом и зеленым луком", desc: "250 г", price: "280 руб.", img: "/imgs/dish32.jpg" },
    { title: "Лапша яичная жареная с овощами", desc: "250 г", price: "320 руб.", img: "/imgs/dish33.jpg" },
    { title: "Шпинат, обжаренный с чесноком", desc: "200 г", price: "290 руб.", img: "/imgs/dis34.jpg" },
    { title: "Спаржа в устричном соусе", desc: "180 г", price: "420 руб.", img: "/imgs/dish35.jpg" },
  ];

  return (
    <section id="menu" className="py-20 bg-[#1a1a1a]">
      <div className="mx-25 mb-10">
        <h2 className="text-[#e7d8a9] text-4xl font-serif">Гарниры</h2>
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