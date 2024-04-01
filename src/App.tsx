import { BoardRow } from "./components/board-row/board-row";
import { FC } from "react";

interface App {
  app: boolean;
}
export const App: FC<App> = () => {
  return (
    <>
      <BoardRow boardRaw={true} />
      <BoardRow boardRaw={true} />
      <BoardRow boardRaw={true} />
    </>
  );
};
