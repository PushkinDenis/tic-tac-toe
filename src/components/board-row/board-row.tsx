import { Square } from "../square/square";
import { FC } from "react";

export const BoardRow: FC<Element> = () => {
  return (
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  );
};
