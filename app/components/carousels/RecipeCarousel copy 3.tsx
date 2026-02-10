"use client";
import { Recipe } from "../../page";

export default function RecipeCarousel3() {
  const recipes: Recipe[] = [
    { title: "Хого из говядины", desc: "Пикантный бульон с тонкой говядиной, овощами и тофу. 350 г", price: "750 руб.", img: "/imgs/dish11.jpg" },
    { title: "Суп из морепродуктов «Шark Fin»", desc: "Насыщенный бульон с креветками, гребешками, крабом и яичной лапшой. 300 г", price: "890 руб.", img: "/imgs/dish12.jpg" },
    { title: "Кисло-острый суп «Сuanla Tang»", desc: "Классический суп с грибами, бамбуком, тофу и свининой. 300 г", price: "450 руб.", img: "/imgs/dish13.jpg" },
    { title: "Вегетарианский суп «Будда»", desc: "Овощной бульон с грибами шиитаке, тофу, брокколи и ростками бамбука. 300 г", price: "420 руб.", img: "/imgs/dish14.jpg" },
    { title: "Суп «Томатный» с говядиной", desc: "Ароматный суп на томатной основе с ломтиками говядины и лапшой. 300 г", price: "530 руб.", img: "/imgs/dish15.jpg" },
  ];

  return (
    <section id="menu" className="py-20 bg-[#1a1a1a]">
      <div className="mx-25 mb-10">
        <h2 className="text-[#e7d8a9] text-4xl font-serif">Супы</h2>
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