import React, { createContext,useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [fromCurrency, setFromCurency] = useState("🇷🇪 EUR - Réunion");
  const [toCurrency, setToCurency] = useState("🇨🇿 CZK - Czechia");
  const [firstAmount,setFirstAmount] = useState('')
  const value = {
    fromCurrency,
    setFromCurency,
    toCurrency,
    setToCurency,
    firstAmount,
    setFirstAmount
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
