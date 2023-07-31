"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Swithcer from "../public/icons/switcher.json";
import { Player } from "@lottiefiles/react-lottie-player";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme("system")
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {
        currentTheme === 'dark' ?
          <button onClick={() => setTheme("light")} className="w-6 h-6 p-2 rounded-lg bg-blue-950 text-white grid place-content-center hover:scale-150 duration-200"><DarkModeIcon style={{ fontSize: "medium" }} className="switcher" /></button>
          :
          <button onClick={() => setTheme("dark")} className="w-6 h-6 p-2 rounded-lg bg-blue-400 text-yellow-300 grid place-content-center hover:scale-150 duration-200"><LightModeIcon style={{ fontSize: "medium" }} className="switcher" /></button>
      }
    </div>
  )
};

export default ThemeSwitch;