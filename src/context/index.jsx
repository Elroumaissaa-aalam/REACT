import React, { createContext, useContext, useState } from 'react';

// Create a context
const NameContext = createContext();

// Create a provider component
export const NameProvider = ({ children }) => {
  const [name, setName] = useState("rourou");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

// Create a custom hook to use the context
export const useName = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
};