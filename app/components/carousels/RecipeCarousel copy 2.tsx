"use client";
import { Recipe } from "../../page";

export default function RecipeCarousel2() {
  const recipes: Recipe[] = [
    { title: "Салат с курицей Гунбао (тепл.)", desc: "Курица, овощи и арахис в знаменитом остром-кисло-сладком соусе. 300 г", price: "520 руб.", img: "/imgs/dish6.jpg" },
    { title: "Салат «Инь-Ян» из огурца и тофу", desc: "Свежий огурец и жареный тофу с легкой заправкой. 280 г", price: "360.", img: "/imgs/dish7.jpg" },
    { title: "Салат с говядиной и сельдереем", desc: "Соломка из маринованной говядины и хрустящего сельдерея. 270 г", price: "490 руб.", img: "/imgs/dish8.jpg" },
    { title: "Теплый салат из кальмаров с овощами (тепл.)", desc: "Кольца кальмара, болгарский перец и лук, быстро обжаренные в воке. 300 г", price: "580 руб.", img: "/imgs/dish9.jpg" },
    { title: "Салат «Лотос» с кунжутной заправкой", desc: "Хрустящие ломтики корня лотоса, морковь и перец. 200 г", price: "400 руб.", img: "/imgs/dish10.jpg" },
  ];

  return (
    <section id="menu" className="py-20 bg-[#1a1a1a]">
      <div className="mx-25 mb-10">
        <h2 className="text-[#e7d8a9] text-4xl font-serif">Салаты</h2>
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