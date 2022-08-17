import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ScreenContainer, ButtonPrimary } from "../common/styles";

const Hand = styled.div`
  img {
    width: 100px;
  }
`;
const Bet = styled.div``;

const CardChoiceScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <p>Here is where i take my turn</p>
      <div>
        <ButtonPrimary>Hit</ButtonPrimary>
      </div>
      <Hand>
        <img src="/assets/svg/2_of_clubs.svg" alt="card"></img>
        <img src="/assets/svg/king_of_diamonds.svg" alt="card"></img>
        <img src="/assets/svg/7_of_diamonds.svg" alt="card"></img>
      </Hand>

      <Bet>
        <h2>Bet Amount</h2>
        <div>
          <ButtonPrimary>100</ButtonPrimary>
          <ButtonPrimary>200</ButtonPrimary>
          <ButtonPrimary>300</ButtonPrimary>
        </div>
      </Bet>

      <div>
        <div>
          <ButtonPrimary>Stay</ButtonPrimary>
        </div>
      </div>
        <Link to={`/`}>
          <ButtonPrimary>Quit</ButtonPrimary>
        </Link>
    </ScreenContainer>
  );
};

export default CardChoiceScreen;
