"use client";
import Image from "next/image";
import { useState } from "react";
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
import AboutUs from "./components/hero/AboutUs";
import Cart from "./components/interior/cart";

export type Recipe = {
  title: string;
  desc: string;
  price: string;
  img: string;
};

export default function Home() {
  const [isResOpen, setIsResOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Recipe[]>([]);

  const addToCart = (recipe: Recipe) => {
    setCartItems([...cartItems, recipe]);
  };

  const removeFromCart = (title: string) => {
  setCartItems(cartItems.filter((item) => item.title !== title));
};

const clearCart = () => {
  setCartItems([]);
};
  return (
    <main className="min-h-screen bg-[#1a1a1a]"> 
      <HeroImage />
      <Main_Menu />
      <RecipeCarousel1 onAdd={addToCart}/>
      <RecipeCarousel2 onAdd={addToCart}/>
      <RecipeCarousel3 onAdd={addToCart}/>
      <RecipeCarousel4 onAdd={addToCart}/>
      <RecipeCarousel5 onAdd={addToCart}/>
      <RecipeCarousel6 onAdd={addToCart}/>
      <RecipeCarousel7 onAdd={addToCart}/>
      <RecipeCarousel8 onAdd={addToCart}/>
      <RecipeCarousel9 onAdd={addToCart}/>
      <RecipeCarousel10 onAdd={addToCart}/>
      <RecipeCarousel11 onAdd={addToCart}/>
      <AboutUs />
      <Cart
        items={cartItems}
        onRemove={removeFromCart} 
        onCheckout={() => setIsResOpen(true)} 
      />

    </main>
  );
}
