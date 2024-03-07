"use client";

import { useState, useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme(
      matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    );
    matchMedia("(prefers-color-scheme: dark)").addEventListener(
      "change",
      ({ matches }) => {
        if (matches) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }
    );
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "light" && (
        <p className="flex flex-row item items-center gap-2 font-semibold text-lg">
          <span className="text-xl">
            <IoMoonOutline />
          </span>
          Dark Mode
        </p>
      )}
      {theme === "dark" && (
        <p className="flex flex-row item items-center gap-2 font-semibold text-lg">
          <span className="text-xl">
            <CiLight />
          </span>
          Light Mode
        </p>
      )}
    </button>
  );
};

export default ThemeSwitcher;
