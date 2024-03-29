import { FC } from "react";

export interface SquareProps {
  value: string;
}

export const Square: FC<SquareProps> = ({ value }: SquareProps) => {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};
