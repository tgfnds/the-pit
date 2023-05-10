import { ReactNode } from "react";
import { api } from "~/utils/api";

interface Props {
  children?: ReactNode;
}

function GameGrid({ children }: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
      {children}
    </div>
  );
}

export default GameGrid;
