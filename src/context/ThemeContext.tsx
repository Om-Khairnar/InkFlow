"use client";

import { createContext, useEffect, useState,ReactNode, } from "react";

interface ThemeContextType {
  theme: string;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
}

const getFromLocalStorage = (): string => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light"; // Default to "light"
  }
  return "light";
};

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<string>(() => getFromLocalStorage());

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};