"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { ButtonProps } from "@/app/interfaces/button";

const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  backButton = false,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (backButton) {
      router.back();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex justify-center items-center py-2 px-4 last:mb-10 h-8 text-sm mobile:text-base mobile:h-12 min-w-32 font-normal shadow-full rounded ${
        backButton
          ? "bg-white_DarkModeText_LightModeElements dark:bg-darkBlue_DarkModeElements dark:text-white_DarkModeText_LightModeElements"
          : ""
      }`}>
      {backButton ? <BiArrowBack /> : name}
    </button>
  );
};

export default Button;
