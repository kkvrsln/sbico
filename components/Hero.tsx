
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')" }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Строим будущее. <span className="text-amber-500">Сегодня.</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 drop-shadow-md">
          Профессиональные услуги по строительству, отделке и монтажу. Мы воплощаем ваши мечты в реальность.
        </p>
        <button onClick={scrollToContact} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-lg">
          Получить консультацию
        </button>
      </div>
    </section>
  );
};

export default Hero;
