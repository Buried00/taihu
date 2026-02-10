"use client";
import { Recipe } from "../../page";

export default function RecipeCarousel9() {
  const recipes: Recipe[] = [
   { title: "Танюань в имбирном сиропе", desc: "рисовые шарики с начинкой из кунжутной пасты или сладкой бобовой пасты. 150 г", price: "310 руб.", img: "/imgs/dish42.jpg" },
    { title: "Манговый пудинг с кокосовым молоком", desc: "Слоеный десерт из свежего мангового пюре, нежного кокосового крема и желе из сока лайма. 150 г", price: "420 руб.", img: "/imgs/dish43.jpg" },
    { title: "Традиционный лунный пряник", desc: "Мягкое песочное тесто с начинкой из пасты лотоса. 100 г", price: "350 руб.", img: "/imgs/dish44.jpg" },
    { title: "Ананасовые булочки «Бо Ло Бао»", desc: "Сладкие, воздушные булочки с хрустящей корочкой, похожей на ананасовую кожуру. 100 г", price: "350 рую.", img: "/imgs/dish45.jpg" },
    { title: "Фирменные роллы с бананом и манго в весенней обертке", desc: "Хрустящие рулетики из тончайшего теста с начинкой из банана и манго. 150 г", price: "390 руб.", img: "/imgs/dish46.jpg" },
  ];

  return (
    <section id="menu" className="py-20 bg-[#1a1a1a]">
      <div className="mx-25 mb-10">
        <h2 className="text-[#e7d8a9] text-4xl font-serif">Десерты</h2>
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