import React, { useState, useEffect, useRef } from 'react';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const TelegramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.88l-1.44 6.93c-.1.49-.4.61-.8.38l-2.2-1.62-1.06 1.02c-.12.12-.22.22-.44.22l.16-2.26 4.1-3.72c.18-.16-.04-.25-.28-.09l-5.1 3.2-2.14-.66c-.48-.15-.49-.45.1-.68l8.5-3.32c.39-.15.75.1.63.58z" />
    </svg>
);

const MessageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const FloatingActionButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const fabRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [fabRef]);

    return (
        <div ref={fabRef} className="fixed bottom-6 right-6 z-50">
            <div
                className={`flex flex-col items-center space-y-3 mb-3 transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            >
                <a
                    href="https://t.me/rrezerv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
                    aria-label="Связаться в Telegram"
                >
                    <TelegramIcon />
                    <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-700 text-white text-sm rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Telegram
                    </span>
                </a>
                
                <a
                    href="tel:+79887219988"
                    className="group relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
                    aria-label="Позвонить нам"
                >
                    <PhoneIcon />
                    <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-700 text-white text-sm rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Позвонить
                    </span>
                </a>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500 transition-transform duration-300 ease-in-out transform hover:scale-110"
                aria-expanded={isOpen}
                aria-label="Открыть меню контактов"
            >
                <div className="transition-transform duration-300 ease-in-out" style={{ transform: isOpen ? 'rotate(135deg)' : 'rotate(0deg)' }}>
                    {isOpen ? <CloseIcon /> : <MessageIcon />}
                </div>
            </button>
        </div>
    );
};

export default FloatingActionButton;
