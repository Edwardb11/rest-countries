import React from "react";

const Detail_label = ({
  labelName,
  labelText,
}: {
  labelName: string;
  labelText: string;
}) => {
  return (
    <p className="font-semibold pb-2 text-lg dark:text-white_DarkModeText_LightModeElements">
      {`${labelName}: `}
      <span className="font-normal">{labelText}</span>
    </p>
  );
};

export default Detail_label;