"use client";

import { useRouter } from "next/navigation";
import ThemeSwitcher from "../theme/theme_switcher";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <header className="sticky top-0 z-10 flex flex-row justify-between items-centre py-6 px-20 bg-white_DarkModeText_LightModeElements dark:bg-darkBlue_DarkModeElements dark:text-white_DarkModeText_LightModeElements shadow-[rgba(133,133,133,0.20)_0px_2px_4px_1px]">
        <button
          onClick={() => {
            router.push("/");
          }}>
          <h1 className="font-extrabold text-3xl">Where in the world?</h1>
        </button>
        <ThemeSwitcher />
      </header>
    </>
  );
};

export default Header;
