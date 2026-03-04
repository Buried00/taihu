"use client";
import { Recipe } from "@/app/page";   // подправь путь, если нужно"../../page";

interface RecipeCarouselProps {
  onAdd: (recipe: Recipe) => void;
}
export default function RecipeCarousel8({ onAdd }: RecipeCarouselProps) {
  const recipes: Recipe[] = [
   { title: "Wok «Чоу Мейн» с курицей»", desc: "Жареная яичная лапша с курицей, овощами и ростками сои. 350 г", price: "520 руб.", img: "/imgs/dish36.jpg" },
    { title: "Wok «Чжаньцзян» со свининой»", desc: "Толстая рисовая лапша с фаршем и черным бобовым соусом. 350 г", price: "550 руб.", img: "/imgs/dish37.jpg" },
    { title: "Фунчоза с морепродуктами", desc: "Стеклянная лапша с креветками, кальмаром и овощами. 50 г", price: "680 руб.", img: "/imgs/dish38.jpg" },
    { title: "Рисовая лапша «Хэфэнь» с говядиной", desc: "Широкая лапша с нежной говядиной в соевом соусе. 350 г", price: "580  руб.", img: "/imgs/dish39.jpg" },
    { title: "Удон с овощами и тофу", desc: "Толстая пшеничная лапша в овощном бульоне. 350 г", price: "480 руб.", img: "/imgs/dish40.jpg" },
    { title: "Жареная лапша «И-Мянь» с креветками", desc: "Хрустящая жареная лапша, политая соусом с креветками и овощами. 350 г", price: "720 руб.", img: "/imgs/dish41.jpg" },
  ];

  return (
    <section id="menu" className="py-20 bg-[#1a1a1a]">
      <div className="mx-25 mb-10">
        <h2 className="text-[#e7d8a9] text-4xl font-serif">Паста & WOK</h2>
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