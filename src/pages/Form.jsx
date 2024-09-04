import { useEffect, useRef, useState } from 'react';


const Form = () => {
  const cvcRef = useRef(null);
  const [cardNumber, setCardNumber] = useState('');

  useEffect(() => {
    cvcRef.current?.focus();

    const params = new URLSearchParams(window.location.search);
    const cardParam = params.get('card') || localStorage.getItem('cardNumber');
    if (cardParam) setCardNumber(cardParam);
  }, []);

  const handleCardChange = (event) => {
    const value = event.target.value;
    setCardNumber(value);
    localStorage.setItem('cardNumber', value);

    const params = new URLSearchParams(window.location.search);
    params.set('card', value);
    window.history.pushState({}, '', `${window.location.pathname}?${params}`);
  };

  return (
    <form style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ width: '100%' }}> Номер карты:
          <input
            type="text"
            name="cardNumber"
            style={{ width: '84%' }}
            value={cardNumber}
            onChange={handleCardChange}
          />
        </label>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ width: '100%' }}> Код CVC:
          <input
            type="password"
            name="cvc"
            style={{ width: '98%' }}
            ref={cvcRef}
          />
        </label>
      </div>
    </form>
  );
};

export default Form;