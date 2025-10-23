import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default App;