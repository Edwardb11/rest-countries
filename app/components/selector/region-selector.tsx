"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

const RegionSelector = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isSelected, setIsSelected] = useState(false);
  const [regionSelected, setRegionSelected] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const region = params.get("region");
    if (region !== null) {
      setRegionSelected(region);
    } else {
      setRegionSelected("");
    }
  }, [searchParams]);

  const handleSelection = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const params = new URLSearchParams(searchParams);
    if (regionSelected === event.currentTarget.name) {
      setRegionSelected("");
      params.delete("region");
    } else {
      setRegionSelected(event.currentTarget.name);
      params.set("region", event.currentTarget.name);
    }

    replace(`${pathname}?${params.toString()}`);
    setIsSelected(!isSelected);
  };

  const items = regions.map((region) => {
    return (
      <button
        key={region}
        name={region}
        onClick={handleSelection}
        className="flex items-center h-8 hover:bg-veryLightGray_LightModeBG dark:hover:bg-veryDarkBlue_DarkModeBG"
      >
        {regionSelected === region && <FaCheck className="pl-2" />}
        <p className={`${regionSelected === region ? "pl-2" : "pl-6"}`}>
          {region}
        </p>
      </button>
    );
  });

  return (
    <div className="mb-4">
      <div className="relative">
        <button
          onClick={() => setIsSelected(!isSelected)}
          className="flex flex-row justify-between items-center bg-white_DarkModeText_LightModeElements dark:bg-darkBlue_DarkModeElements dark:text-white_DarkModeText_LightModeElements rounded-md shadow-full w-56 h-14 pl-6 pr-2 focus:outline-none"
        >
          <span className="leading-none">Filter by Region</span>
          <div className="text-3xl">
            {isSelected && <RiArrowDropUpLine />}
            {!isSelected && <RiArrowDropDownLine />}
          </div>
        </button>
        <div
          className={`${
            isSelected ? "block" : "hidden"
          } absolute flex flex-col w-full mt-1 rounded-md py-4 bg-white_DarkModeText_LightModeElements dark:bg-darkBlue_DarkModeElements dark:text-white_DarkModeText_LightModeElements shadow-lg`}
        >
          {items}
        </div>
      </div>
    </div>
  );
};

export default RegionSelector;