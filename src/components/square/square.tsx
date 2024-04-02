import { FC } from "react";

export interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export const Square: FC<SquareProps> = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button type="button" className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
