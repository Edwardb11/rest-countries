"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDebouncedCallback } from "use-debounce";

const SearchForm = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const country = params.get("country");
    if (country !== null) {
      inputRef.current!.value = country;
    } else {
      inputRef.current!.value = "";
    }
  }, [searchParams]);

  const handleChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const params = new URLSearchParams(searchParams);
      if (e.target.value === "") {
        params.delete("country");
      } else {
        params.set("country", e.target.value);
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300
  );

  return (
    <form className="w-5/12 min-w-64 max-w-[600px] flex flex-row justify-start items-center gap-6 h-14 shadow-full rounded-lg bg-white_DarkModeText_LightModeElements dark:bg-darkBlue_DarkModeElements focus-within:ring focus-within:ring-offset-2 overflow-hidden">
      <div
        onClick={() => {
          inputRef.current?.focus();
        }}
        className="pl-6 text-darkGray_LightModeInput dark:text-white_DarkModeText_LightModeElements text-2xl font-extrabold"
      >
        <IoIosSearch />
      </div>
      <input
        ref={inputRef}
        type="text"
        name="country"
        placeholder="Search for a country..."
        className="h-full w-full outline-none dark:text-white_DarkModeText_LightModeElements dark:bg-darkBlue_DarkModeElements"
        onChange={handleChange}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </form>
  );
};

export default SearchForm;