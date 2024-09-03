import { createContext, useState} from 'react';

export const Themecontext = createContext()

export const Theme = ({ children }) => {
    const [value, setValue] = useState('');
  return (
    <Themecontext.Provider value={{value, setValue}}>
      {children}
    </Themecontext.Provider>
  )
}


