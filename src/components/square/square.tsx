import { FC, useState } from "react";

export const Square: FC<HTMLButtonElement> = () => {
  const [value, setValue] = useState<string | null>(null);
  function handleClick() {
    setValue("X");
  }
  return (
    <button type="button" className="square" onClick={handleClick}>
      {value}
    </button>
  );
};
