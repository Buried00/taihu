"use client";
import { useState } from "react";
import { Recipe } from "../../page";

interface CartProps {
  items: Recipe[];
  onRemove: (title: string) => void;
  onCheckout: () => void;
}

export default function Cart({ items, onRemove, onCheckout }: CartProps) {
  const [isOpen, setIsOpen] = useState(false);

  const groupedItems = items.reduce((acc, item) => {
    const existing = acc.find((i) => i.title === item.title);
    if (existing) { existing.quantity += 1; } 
    else { acc.push({ ...item, quantity: 1 }); }
    return acc;
  }, [] as (Recipe & { quantity: number })[]);

  const total = items.reduce((sum: number, item: Recipe) => {
    const priceNum = parseFloat(item.price.replace("₽", ""));
    return isNaN(priceNum) ? sum : sum + priceNum;
  }, 0);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="fixed bottom-8 right-8 z-50 bg-[#e7d8a9] text-black p-4 rounded-full font-bold">
        🛒 <span>{items.length}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-100 flex justify-end">
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsOpen(false)} />
          <div className="relative w-80 h-full bg-[#1a1a1a] border-l border-[#e7d8a9]/20 p-8 flex flex-col">
            <h2 className="text-[#e7d8a9] text-2xl font-serif mb-8">Ihre Auswahl</h2>
            <div className="flex-1 overflow-y-auto space-y-4">
              {groupedItems.map((item, idx) => (
                <div key={idx} className="flex justify-between text-white border-b border-white/10 pb-2">
                  <span>{item.title} (x{item.quantity})</span>
                  <button onClick={() => onRemove(item.title)} className="text-red-400 text-xs">X</button>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <div className="text-white text-xl font-bold mb-4">Total: {total}₽</div>
              <button 
                onClick={() => { setIsOpen(false); onCheckout(); }} 
                className="w-full bg-[#e7d8a9] py-3 rounded font-bold"
              >
                Zur Reservierung
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}