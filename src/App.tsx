import { BoardRow } from "./components/board-row/board-row";

export const App = () => {
  return (
    <>
      <BoardRow firstValue="1" secondValue="2" thirdValue="3" />
      <BoardRow firstValue="4" secondValue="5" thirdValue="6" />
      <BoardRow firstValue="7" secondValue="8" thirdValue="9" />
    </>
  );
};
