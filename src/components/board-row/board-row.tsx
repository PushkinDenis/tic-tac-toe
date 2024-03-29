import { Square } from "../square/square";
import { FC } from "react";

export interface BoardRowProps {
  firstValue: string;
  secondValue: string;
  thirdValue: string;
}

export const BoardRow: FC<BoardRowProps> = ({ firstValue, secondValue, thirdValue }: BoardRowProps) => {
  return (
    <div className="board-row">
      <Square value={firstValue} />
      <Square value={secondValue} />
      <Square value={thirdValue} />
    </div>
  );
};
