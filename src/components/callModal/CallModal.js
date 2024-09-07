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
        }
    }, [isOpen]);

    if (!isOpen && !closing) return null;

    const handleSubmit = () => {
        if (phone.trim() === '') {
            setError('Пожалуйста, заполните все обязательные поля');
            return;
        }
        console.log('Телефон ракам:', phone);
        setError('');
        setSubmitted(true);
    };

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            onClose();
        }, 1000);
    };


    return (
        <div className={`modal-overlay ${closing ? 'fade-out' : ''}`}>
            <button className='modal-close' onClick={handleClose}>
                <AiOutlineClose />
            </button>
            <div className={`modal-content ${closing ? 'slide-up' : ''}`}>
                <h1 className='callH1'>Заказать звонок</h1>
                <br />
                {submitted ? (
                    <div className='success-message'>
                        <p>Данные успешно отправлены. Спасибо!</p>
                        <br />
                        <p>Ma'lumotlar muvaffaqiyatli yuborildi. Rahmat!</p>
                        <br />
                        <p>Data successfully sent. Thank you!</p>
                    </div>
                ) : (
                    <>
                        <div className="IkkiP">
                            <p className='callP'>Введите ваш номер телефона.</p>
                            <p className='callP1'>Наши операторы свяжутся с вами.</p>
                        </div>
                        <br />
                        <div className="BtnInp">
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
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
