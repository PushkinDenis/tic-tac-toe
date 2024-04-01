import { FC, useState } from "react";
interface Square {
  square: boolean;
}
export const Square: FC<Square> = () => {
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
