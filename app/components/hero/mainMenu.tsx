"use client";
import { useState } from "react";
import ReservationForm from "./booking";

export default function Main_Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { name: "Меню", href: "#menu" },
    { name: "Резервирование", action: () => setIsModalOpen(true) },
    { name: "О нас", href: "#about" },
    { name: "Контакты", href: "#contact" },
  ];

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="flex justify-center gap-6 p-4">
        <ul className="flex gap-6 list-none">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:scale-110 active:scale-95"
            >
              {item.href ? (
                <a href={item.href}>{item.name}</a>
              ) : (
                <button onClick={item.action} className="bg-transparent border-none text-inherit font-inherit cursor-pointer">
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl font-bold z-10"
            >
              &times;
            </button>
            <ReservationForm onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}