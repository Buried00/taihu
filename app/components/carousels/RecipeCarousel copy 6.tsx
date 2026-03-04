"use client";
import { Recipe } from "@/app/page";   // подправь путь, если нужно"../../page";

interface RecipeCarouselProps {
  onAdd: (recipe: Recipe) => void;
}
export default function RecipeCarousel6({ onAdd }: RecipeCarouselProps) {
  const recipes: Recipe[] = [
    { title: "Утка по-пекински", desc: "Хрустящая утка с тонкими блинчиками, соусом хойсин, огурцом и луком. 600 г", price: "2200 руб.", img: "/imgs/dish26.jpg" },
    { title: "Свинина в кисло-сладком соусе «Гулаожоу»", desc: "Хрустящие кусочки свинины в классическом соусе с ананасом и перцем. 350 г", price: "650 руб.", img: "/imgs/dish27.jpg" },
    { title: "Говядина с брокколи", desc: "Нежная говяжья вырезка с соцветиями брокколи в устричном соусе. 320 г", price: "720 руб.", img: "/imgs/dish28.jpg" },
    { title: "Баранина с тмином «Цзыжань Янжоу»", desc: "Ломтики баранины, обжаренные с луком и большим количеством тмина. 350 г", price: "780 руб.", img: "/imgs/dish29.jpg" },
    { title: "Телятина «Мапо»", desc: "Острое блюдо из фарша телятины с тофу в маслянисто-бобовом соусе. 300 г", price: "680 руб.", img: "/imgs/dish30.jpg" },
  ];

  return (
    <section id="menu" className="py-20 bg-[#1a1a1a]">
      <div className="mx-25 mb-10">
        <h2 className="text-[#e7d8a9] text-4xl font-serif">Мясо & птица</h2>
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