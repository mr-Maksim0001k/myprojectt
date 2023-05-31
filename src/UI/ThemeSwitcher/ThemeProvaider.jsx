import React, { createContext, useState } from "react";

// Создаем контекст для передачи информации о теме
export const ThemeContext = createContext();

// Компонент провайдера темы
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Метод для переключения темы
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Значение, передаваемое через контекст
  const themeContextValue = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
