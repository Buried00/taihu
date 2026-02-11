"use client";
import Image from "next/image";
import HeroImage from "./components/hero/heroImage";
import Main_Menu from "./components/hero/mainMenu";
import RecipeCarousel1 from "./components/carousels/RecipeCarousel copy 1";
import RecipeCarousel2 from "./components/carousels/RecipeCarousel copy 2";
import RecipeCarousel3 from "./components/carousels/RecipeCarousel copy 3";
import RecipeCarousel4 from "./components/carousels/RecipeCarousel copy 4";
import RecipeCarousel5 from "./components/carousels/RecipeCarousel copy 5";
import RecipeCarousel6 from "./components/carousels/RecipeCarousel copy 6";
import RecipeCarousel7 from "./components/carousels/RecipeCarousel copy 7";
import RecipeCarousel8 from "./components/carousels/RecipeCarousel copy 8";
import RecipeCarousel9 from "./components/carousels/RecipeCarousel copy 9";
import RecipeCarousel10 from "./components/carousels/RecipeCarousel copy 10";
import RecipeCarousel11 from "./components/carousels/RecipeCarousel copy 11";
import AboutUs from "/components/hero/AboutUs";

export type Recipe = {
  title: string;
  desc: string;
  price: string;
  img: string;
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]"> 
      <HeroImage />
      <Main_Menu />
      <RecipeCarousel1 />
      <RecipeCarousel2 />
      <RecipeCarousel3 />
      <RecipeCarousel4 />
      <RecipeCarousel5 />
      <RecipeCarousel6 />
      <RecipeCarousel7 />
      <RecipeCarousel8 />
      <RecipeCarousel9 />
      <RecipeCarousel10 />
      <RecipeCarousel11 />

    </main>
  );
}
