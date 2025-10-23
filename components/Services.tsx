
import React from 'react';

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
const PaintBrushIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);


const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-amber-500/20">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);


const Services: React.FC = () => {
    const services = [
        {
            icon: <BuildingIcon />,
            title: "Строительство",
            description: "Возведение зданий и сооружений с нуля. Мы используем современные технологии и качественные материалы для долговечности и надежности."
        },
        {
            icon: <PaintBrushIcon />,
            title: "Отделочные работы",
            description: "Комплексная внутренняя и внешняя отделка. Создаем эстетически привлекательные и функциональные пространства для жизни и работы."
        },
        {
            icon: <WrenchIcon />,
            title: "Монтаж систем",
            description: "Профессиональный монтаж инженерных систем: отопление, вентиляция, водоснабжение, электрика. Гарантия безопасности и эффективности."
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Наши Услуги</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Мы предлагаем полный спектр услуг для реализации вашего проекта любой сложности.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
