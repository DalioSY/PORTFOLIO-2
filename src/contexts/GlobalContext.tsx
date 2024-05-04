import { ReactNode, createContext, useContext, useState } from "react";

interface iGlobalContext {
  sidebarIsOpen: boolean;
  handleOpenSidebar: () => void;
  isDarkTheme: boolean;
  handleChangeTheme: () => void;
}
interface iGlobalProviderProps {
  children: ReactNode;
}

export const GlobalContext = createContext<iGlobalContext>(
  {} as iGlobalContext,
);

export const GlobalProvider = ({ children }: iGlobalProviderProps) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleOpenSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <GlobalContext.Provider
      value={{
        isDarkTheme,
        handleChangeTheme,
        sidebarIsOpen,
        handleOpenSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
