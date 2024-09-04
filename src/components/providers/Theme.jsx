import { createContext, useState} from 'react';

export const Themecontext = createContext()

export const Theme = ({ children }) => {
    const [value, setValue] = useState('');
    const[cardNumber, setCardNumber] = useState('')
  return (
    <Themecontext.Provider value={{value, setValue, cardNumber, setCardNumber}}>
      {children}
    </Themecontext.Provider>
  )
}


