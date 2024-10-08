import React, { useState, useEffect } from 'react';
import './CallModal.css';
import { AiOutlineClose } from 'react-icons/ai';

const CallModal = ({ isOpen, onClose }) => {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setClosing(false);
            setPhone('');
            setError('');
            setSubmitted(false);
        }
    }, [isOpen]);

    if (!isOpen && !closing) return null;

    const isValidPhone = (phone) => {
        const phoneRegex = /^[0-9]+$/;
        return phoneRegex.test(phone) && phone.length >= 10;
    };

    const handleSubmit = () => {
        if (!isValidPhone(phone)) {
            setError('');
            setSubmitted(true);
            return;
        }
        console.log('Телефон:', phone);
        setError('');
        setSubmitted(false);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        if (isValidPhone(e.target.value)) {
            setError('');
        }
    };

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            onClose();
        }, 1000);
    };

    return (
        <div className={`modal-overlay ${closing ? 'fade-out' : ''}`}>
            <button className='modal-close' onClick={handleClose} aria-label="Close modal">
                <AiOutlineClose />
            </button>
            <div className={`modal-content ${closing ? 'slide-up' : ''}`}>
                <h1 className='callH1'>Заказать звонок</h1>
                {submitted ? (
                    <div className='success-message'>
                        <p>Data successfully sent. Thank you!</p>
                        <p>Данные успешно отправлены. Спасибо!</p>
                        <p>Ma'lumotlar muvaffaqiyatli yuborildi. Rahmat!</p>
                    </div>
                ) : (
                    <>
                        <div className="IkkiP">
                            <p className='callP'>Введите ваш номер телефона.</p>
                            <p className='callP1'>Наши операторы свяжутся с вами.</p>
                        </div>
                        <div className="BtnInp">
                            <input
                                type="text"
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder="Телефон"
                                className="phone-input"
                            />
                            <div className="onlyBtn">
                                <button className='modal-submit' onClick={handleSubmit}>Отправить</button>
                            </div>
                        </div>
                        {error && <p className='error-message'>{error}</p>}
                        <div className="IkkinchiP">
                            <p className='callP2'>Нажимая на кнопку, вы даете согласие на обработку</p>
                            <p className='callP3'>персональных данных</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CallModal;
