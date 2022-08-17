import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cardDeck } from "../common/cardDeck";
import { ScreenContainer, ButtonPrimary } from "../common/styles";
import { dealACard } from "../helpers/gamePlayHelpers";

interface Props {
  setMacsHand: Function;
  macsHand: Array<string>;
}

const Hand = styled.div`
  img {
    width: 100px;
  }
`;
const Bet = styled.div``;

const CardChoiceScreen: React.FC<Props> = ({ macsHand, setMacsHand }) => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/gameplay`; 
    navigate(path);
  }
  
  function hitMeBabyOneMoreTime() {
    const macsCard = dealACard(cardDeck);
    setMacsHand([...macsHand, macsCard]) 
  }
  
  return (
    <ScreenContainer>
      <p>Here is where i take my turn</p>
      <div>
        <ButtonPrimary onClick={() => hitMeBabyOneMoreTime()}>Hit</ButtonPrimary>
      </div>
      <Hand>
        {macsHand.map((card) => {
          return <img src={`/assets/svg/${card}.svg`} alt="card"></img>;
        })}
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
