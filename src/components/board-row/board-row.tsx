import { Square } from "../square/square";
import { FC } from "react";

interface BoardRow {
  boardRaw: boolean;
}
export const BoardRow: FC<BoardRow> = () => {
  return (
    <div className="board-row">
      <Square square={true} />
      <Square square={true} />
      <Square square={true} />
    </div>
  );
};
