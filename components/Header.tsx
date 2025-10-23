
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          <span className="text-amber-500">БИ</span><span className="text-white">КО</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-amber-400 transition cursor-pointer">Главная</a>
          <a onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-amber-400 transition cursor-pointer">Услуги</a>
          <a onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-amber-400 transition cursor-pointer">О нас</a>
          <a onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-amber-400 transition cursor-pointer">Контакты</a>
        </nav>
        <button onClick={() => scrollToSection('contact')} className="hidden md:block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105">
          Заказать звонок
        </button>
      </div>
    </header>
  );
};

export default Header;