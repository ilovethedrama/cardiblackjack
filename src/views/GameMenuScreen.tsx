import React from "react";

import { ScreenContainer, ButtonPrimary } from "../common/styles";

import { Link } from "react-router-dom";

const GameMenuScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <p>Here is the game lobby screen where i start a game</p>

      <Link to={`/gameplay`}>
        <ButtonPrimary>Start A Game</ButtonPrimary>
      </Link>
    </ScreenContainer>
  );
};

export default GameMenuScreen;
