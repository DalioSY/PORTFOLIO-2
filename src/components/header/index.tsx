import { SunDim } from "@phosphor-icons/react";
import { Dispatch } from "react";

interface iHeader {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ isDarkTheme, setIsDarkTheme }: iHeader) {
  return (
    <div>
      <SunDim size={32} onClick={() => setIsDarkTheme(!isDarkTheme)} />
    </div>
  );
}
