import React, { useState } from "react";
import GameMenuScreen from "./views/GameMenuScreen";
import CardChoiceScreen from "./views/CardChoiceScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundScreen from "./views/NotFoundScreen";
import CompetitionGameplayScreen from "./views/CompetitionGameplayScreen";
import styled from "styled-components";
import { Colours } from "./common/styles";
import GamePlayErrorBoundary from "./components/GamePlayErrorBoundary";
import GameContext from "./context/GameContext";

const GameScreenContainer = styled.div`
  background: ${Colours.lightGreen};
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [currentPlayerTurn, setCurrentPlayerTurn] = useState("");
  const [isDealerBust, setIsDealerBust] = useState(false);
  const [isDealerCountSeventeenOrHigher, setIsDealerCountSeventeenOrHigher] =
    useState(false);
  const [isMacsBust, setIsMacsBust] = useState(false);
  const [isRoundOver, setIsRoundOver] = useState(false);
  const [gameData, setGameData] = useState(null);

  const [macsHand, setMacsHand] = useState<Array<string>>([]);
  const [dealersHand, setDealersHand] = useState<Array<string>>([]);

  return (
    <GameContext.Provider
      value={{
        gameData: gameData,
        currentPlayerTurn: currentPlayerTurn,
        isDealerBust: isDealerBust,
        isDealerCountSeventeenOrHigher: isDealerCountSeventeenOrHigher,
        isMacsBust: isMacsBust,
        isRoundOver: isRoundOver,
        setCurrentPlayerTurn: setCurrentPlayerTurn,
        setIsDealerBust: setIsDealerBust,
        setIsDealerCountSeventeenOrHigher: setIsDealerCountSeventeenOrHigher,
        setIsMacsBust: setIsMacsBust,
        setIsRoundOver: setIsRoundOver,
      }}>
      <GameScreenContainer>
        <GamePlayErrorBoundary>
          <Router>
            <Routes>
              <Route path="/" element={<GameMenuScreen />} />
              <Route path="/playerturn" element={<CardChoiceScreen macsHand={macsHand} setMacsHand={setMacsHand} />} />
              <Route path="/gameplay" element={<CompetitionGameplayScreen macsHand={macsHand} dealersHand={dealersHand} setMacsHand={setMacsHand} setDealersHand={setDealersHand} />} />
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
          </Router>
        </GamePlayErrorBoundary>
      </GameScreenContainer>
    </GameContext.Provider>
  );
}

export default App;
