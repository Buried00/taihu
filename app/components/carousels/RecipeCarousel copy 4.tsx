"use client";
import { Recipe } from "../../page";

export default function RecipeCarousel4() {
  const recipes: Recipe[] = [
   { title: "Лепешки Цун Ю Бин", desc: "1 шт. 100 г", price: "280 руб.", img: "/imgs/dish16.jpg" },
    { title: "Жареные лепешки Шаобин", desc: "1 шт. 100 г", price: "220 руб.", img: "/imgs/dish17.jpg" },
    { title: "Сян Су Ню Жоу Бин (Лепешки с тмином и говядиной)", desc: "2 шт. 200 г", price: "320 руб.", img: "/imgs/dish18.jpg" },
    { title: "Зеленые луковые блины Цун Ю Бин", desc: "1 шт. 150 г", price: "250 руб.", img: "/imgs/dish19.jpg" },
    { title: "Лаваш по-пекински", desc: "1 шт. 100 г", price: "180 руб.", img: "/imgs/dish20.jpg" },
  ];

  return (
    <section id="menu" className="py-20 bg-[#1a1a1a]">
      <div className="mx-25 mb-10">
        <h2 className="text-[#e7d8a9] text-4xl font-serif">Хлеб & выпичка</h2>
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