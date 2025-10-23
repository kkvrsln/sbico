
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <div className="text-2xl font-bold tracking-wider mb-4">
            <span className="text-amber-500">БИ</span><span className="text-white">КО</span>
          </div>
          <p className="max-w-md text-gray-400 mb-4">
            Ваш надежный партнер в мире строительства. Качество, надежность и профессионализм.
          </p>
          <div className="flex space-x-6 mb-4">
            <a href="mailto:info@biko.com" className="text-gray-300 hover:text-amber-400 transition">info@biko.com</a>
            <a href="tel:+74951234567" className="text-gray-300 hover:text-amber-400 transition">+7 (495) 123-45-67</a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} БИКО. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;