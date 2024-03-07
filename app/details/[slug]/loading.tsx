import { Skeleton } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <div className="px-4 mobile:px-24 pt-10 mobile:pt-20 dark:bg-veryDarkBlue_DarkModeBG h-full">
      <Skeleton variant="rectangular" width={150} height={48} />
      <div className="grid grid-cols-1 mobile:grid-cols-2 mt-20">
        <div className="col-span-1 flex flex-col justify-center items-start">
          <Skeleton variant="rectangular" width={600} height={400} />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-start px-4 mobile:px-16">
          <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={300} />
          <div className="flex flex-col mobile:flex-row justify-between items-baseline gap-4 w-full ">
            <div className="">
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
            </div>
            <div className="">
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
            </div>
          </div>
          <div className="mt-10 mobile:mt-16 text-lg font-semibold flex flex-col mobile:flex-row justify-start items-center gap-4 dark:text-white_DarkModeText_LightModeElements">
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={200} />
            <Skeleton variant="rectangular" width={36} height={12} />
            <Skeleton variant="rectangular" width={36} height={12} />
            <Skeleton variant="rectangular" width={36} height={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
