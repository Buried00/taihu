"use client";
import { Recipe } from "../../page";

export default function RecipeCarousel10() {
  const recipes: Recipe[] = [
      { title: "Соевый соус классический", desc: "50 г", price: "80 руб.", img: "/imgs/dish47.jpg" },
    { title: "Соус чили острый *Лацз*", desc: "50 г", price: "110 руб.", img: "/imgs/dish48.jpg" },
    { title: "Соус Хойсин", desc: "60 г", price: "135 руб.", img: "/imgs/dish49.jpg" },
    { title: "Соус кисло-сладкий ананасовый", desc: "80 г", price: "150 руб.", img: "/imgs/dish50.jpg" },
    { title: "Чесночно-имбирный соус", desc: "60 г", price: "115 руб.", img: "/imgs/dish51.jpg" },
  ];

  return (
    <section id="menu" className="py-20 bg-[#1a1a1a]">
      <div className="mx-25 mb-10">
        <h2 className="text-[#e7d8a9] text-4xl font-serif">Соусы</h2>
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