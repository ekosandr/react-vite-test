
const ModalForm = ({ closeModal }) => {
    const handleSubmit = () => {
     
      closeModal(); 
      window.location.href = '/pages/page3';
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
          <input type="email" name="cardNumber" style={{ width: '84%' }}/>
        </label>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ width: '100%' }}> Код CVC:
          <input type="password" name="cvc" style={{ width: '98%' }} />
        </label>
      </div>
      <button type="button" onClick={handleSubmit}>Отправить</button>
    </form>
  );
}

export default ModalForm;