import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ScreenContainer, ButtonPrimary } from "../common/styles";

const PlayerZone = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 30px;
  padding: 20px;
  margin: 30px 60px;

  h2 {
    text-align: center;
  }

  div {
    flex: 1 1 100px;
  }
`;

const Hand = styled.div`
  img {
    width: 100px;
  }
`;

const CompetitionGameplayScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <p>Here is the main game play screen that I see after I take my turn</p>

      <PlayerZone>
        <div>
          <h2>Dealer</h2>
          <Hand>
            <img src="/assets/svg/2_of_clubs.svg" alt="card"></img>
            <img src="/assets/svg/king_of_diamonds.svg" alt="card"></img>
          </Hand>
        </div>
        <div>
          <h2>Macs</h2>
          <Hand>
            <img src="/assets/svg/2_of_clubs.svg" alt="card"></img>
            <img src="/assets/svg/king_of_diamonds.svg" alt="card"></img>
            <img src="/assets/svg/7_of_diamonds.svg" alt="card"></img>
          </Hand>
        </div>
        <div>
          <h3>Bet Pot</h3>
          <p>Winnings: 300</p>
        </div>
      </PlayerZone>
      <div>
        <Link to={`/playerturn`}>
          <ButtonPrimary>Take turn</ButtonPrimary>
        </Link>

        <Link to={`/`}>
          <ButtonPrimary>Back to the lobby</ButtonPrimary>
        </Link>
      </div>
    </ScreenContainer>
  );
};

export default CompetitionGameplayScreen;
