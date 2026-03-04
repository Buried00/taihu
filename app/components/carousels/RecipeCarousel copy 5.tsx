"use client";
import { Recipe } from "@/app/page";   // подправь путь, если нужно"../../page";

interface RecipeCarouselProps {
  onAdd: (recipe: Recipe) => void;
}
export default function RecipeCarousel5({ onAdd }: RecipeCarouselProps) {
  const recipes: Recipe[] = [
    { title: "Рыба по-сычуаньски «Шуйчжу Юй»", desc: "Филе рыбы (окунь), тушенное в огненном масле с сычуаньским перцем и овощами. 600 г", price: "1200 руб.", img: "/imgs/dish21.jpg" },
    { title: "Угорь, тушеный в пикантном соусе", desc: "Нежное мясо угря в густом соусе на основе рисового вина и соевого соуса. 400 г", price: "1100 руб.", img: "/imgs/dish22.jpg" },
    { title: "Кальмары «Саче» с овощами", desc: "Кальмары, обжаренные с болгарским перцем и луком в пряном соусе саче. 400 г", price: "810 руб.", img: "/imgs/dish23.jpg" },
    { title: "Жареные гребешки с чесноком", desc: "Нежные морские гребешки, быстро обжаренные с чесноком и побегами бамбука. 280 г", price: "1250 руб.", img: "/imgs/dish24.jpg" },
    { title: "Мидии в остром черном бобовом соусе", desc: "Мидии, приготовленные на пару с соусом из черных бобов, чили и чеснока. 500 г", price: "840 руб.", img: "/imgs/dish25.jpg" },
  ];

  return (
    <section id="menu" className="py-20 bg-[#1a1a1a]">
      <div className="mx-25 mb-10">
        <h2 className="text-[#e7d8a9] text-4xl font-serif">Рыба & морепродукты</h2>
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