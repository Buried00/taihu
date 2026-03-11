"use client";

export default function Main_Menu() {
  const navItems = [
    { name: "Меню", href: "#menu" },
    { name: "Резервирование", action: () => setIsModalOpen(true) }, // Действие вместо ссылки
    { name: "О нас", href: "#about" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <ul className="flex justify-between mx-25 py-5 text-[#e7d8a9] font-extrabold">
      {navItems.map((item) => (
        <li 
          key={item.name}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:scale-110 active:scale-95"
        >
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
