
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/800/600?random=2" 
              alt="Our Team" 
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-white mb-4">О Нашей Компании</h2>
            <p className="text-gray-300 mb-4 text-lg">
              <span className="font-semibold"><span className="text-amber-500">БИ</span><span className="text-white">КО</span></span> — это команда высококвалифицированных специалистов, объединенных общей целью: создавать качественные, надежные и современные объекты. Мы работаем на рынке более 10 лет, успешно реализуя проекты различной сложности.
            </p>
            <p className="text-gray-300 mb-6">
              Наш главный принцип — индивидуальный подход к каждому клиенту и строгий контроль качества на всех этапах работ, от проектирования до сдачи объекта. Мы гордимся своей репутацией и стремимся превосходить ожидания.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Гарантия качества на все виды работ</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Соблюдение сроков и бюджета проекта</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Использование только сертифицированных материалов</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;