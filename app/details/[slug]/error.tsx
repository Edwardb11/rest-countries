"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-screen flex-col items-center justify-center dark:bg-veryDarkBlue_DarkModeBG">
      <h2 className="text-center dark:text-white_DarkModeText_LightModeElements">
        Something went wrong!
      </h2>
      <button
        className="mt-4 rounded-md bg-darkGray_LightModeInput dark:bg-darkBlue_DarkModeElements px-4 py-2 text-sm text-veryDarkBlue_LightModeText dark:text-white_DarkModeText_LightModeElements hover:bg-veryDarkBlue_LightModeText hover:text-veryLightGray_LightModeBG"
        onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
