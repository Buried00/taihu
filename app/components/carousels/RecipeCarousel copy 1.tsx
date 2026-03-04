"use client";
import { Recipe } from "@/app/page";   // подправь путь, если нужно"../../page";

interface RecipeCarouselProps {
  onAdd: (recipe: Recipe) => void;
}
export default function RecipeCarousel1({ onAdd }: RecipeCarouselProps) {
  const recipes: Recipe[] = [
    { title: "Спринг-роллы с овощами", desc: "Рисовая бумага, овощи, зелень. 180 г", price: "420 руб.", img: "/imgs/dish1.jpg" },
    { title: "Суань Ла Лянбань Цецзы", desc: "Курица, уксус, масло чили, чеснок. 350 г", price: "400 руб.", img: "/imgs/dish2.jpg" },
    { title: "Куриные лапки в остром соусе", desc: "Лапки, масло чили, чеснок, соевый соус. 200 г", price: "420 руб.", img: "/imgs/dish3.jpg" },
    { title: "Желудки утки в пяти специях", desc: "Желудки, пять специй, соевый соус. 175 г", price: "470 руб.", img: "/imgs/dish4.jpg" },
    { title: "Спрут в устричном соусе", desc: "Осьминог, устричный соус. 150 г", price: "580 руб.", img: "/imgs/dish5.jpg" },
  ];

  return (
    <section id="menu" className="py-20 bg-[#1a1a1a]">
      <div className="mx-25 mb-10">
        <h2 className="text-[#e7d8a9] text-4xl font-serif">Закуски</h2>
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