import { createContext } from "react";
// types
import { GameData } from "../types/Game";

const ctx: ctxType = {
  gameData: null,
  currentPlayerTurn: "",
  isDealerBust: false,
  isDealerCountSeventeenOrHigher: false,
  isMacsBust: false,
  isRoundOver: false,
  setCurrentPlayerTurn: () => {},
  setIsDealerBust: () => {},
  setIsDealerCountSeventeenOrHigher: () => {},
  setIsMacsBust: () => {},
  setIsRoundOver: () => {},
};

export interface ctxType {
  gameData: GameData | null;
  currentPlayerTurn: string,
  isDealerBust: boolean,
  isDealerCountSeventeenOrHigher: boolean,
  isMacsBust: boolean,
  isRoundOver: boolean,
  setCurrentPlayerTurn: Function,
  setIsDealerBust: Function,
  setIsDealerCountSeventeenOrHigher: Function,
  setIsMacsBust: Function,
  setIsRoundOver: Function,
}

const GameContext = createContext(ctx);

export default GameContext;
