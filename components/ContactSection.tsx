
import React from 'react';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Готовы начать проект?</span>
                <span className="block text-amber-500">Свяжитесь с нами.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-300">
                Оставьте свой номер телефона, и наш менеджер свяжется с вами в ближайшее время для бесплатной консультации и расчета стоимости вашего проекта.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
