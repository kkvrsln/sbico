
import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('submitting');
        setError(null);

        // This simulates the fetch call to the user's specified backend endpoint.
        // In a real application, you would replace this with a real fetch call.
        try {
            // Mocking the fetch to 'send_to_telegram.php'
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Mocking a successful response. 
            // In a real scenario, you would check response.ok and parse JSON.
            const result = { success: true };
            
            if (result.success) {
                setStatus('success');
            } else {
                // This part would be executed if result.success was false
                setStatus('error');
                setError('Произошла ошибка при отправке.');
            }
        } catch (err) {
            setStatus('error');
            setError('Не удалось подключиться к серверу.');
        }
    };

    const isSuccess = status === 'success';
    const isSubmitting = status === 'submitting';

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <div className="form-group flex flex-col items-center gap-4 w-full">
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (XXX) XXX-XX-XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={isSubmitting || isSuccess}
                    className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 text-base focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors duration-300"
                />
                 <span className="text-xs text-gray-500 text-center">
                    Отправляя заявку, вы соглашаетесь с политикой обработки персональных данных
                </span>
                <input
                    type="submit"
                    value={
                        isSuccess ? 'Мы вам скоро перезвоним!' :
                        isSubmitting ? 'Отправка...' :
                        'Отправить'
                    }
                    disabled={isSubmitting || isSuccess}
                    className={`w-full inline-flex items-center justify-center gap-2 px-7 py-3 font-semibold text-white rounded-xl text-base transition-all duration-300 ease-in-out cursor-pointer
                    ${isSuccess
                        ? 'bg-green-600 pointer-events-none'
                        : 'bg-gradient-to-r from-amber-600 to-amber-500 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1'
                    }
                    ${isSubmitting ? 'opacity-70 cursor-wait' : ''}
                    `}
                />
            </div>
            {status === 'error' && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
    );
};

export default ContactForm;
