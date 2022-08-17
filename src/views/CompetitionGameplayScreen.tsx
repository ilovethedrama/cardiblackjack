import React, { useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cardDeck } from "../common/cardDeck";
import { ScreenContainer, ButtonPrimary } from "../common/styles";
import { dealACard } from "../helpers/gamePlayHelpers";

interface Props {
  setMacsHand: Function; 
  setDealersHand: Function;
  macsHand: Array<string>;
  dealersHand: Array<string>;
}

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

const CompetitionGameplayScreen: React.FC<Props> = ({setMacsHand, setDealersHand, macsHand, dealersHand}) => {

  useLayoutEffect(() => {
    const dealersCard = dealACard(cardDeck) 
    setDealersHand([dealersCard])
    
    const macsCard = dealACard(cardDeck) 
    setMacsHand([macsCard])
    
    
    console.log(macsHand);
    
  },[])
  
  return (
    <ScreenContainer>
      <p>Here is the main game play screen that I see after I take my turn</p>

      <PlayerZone>
        <div>
          <h2>Dealer</h2>
          <Hand>
            {
              dealersHand.map((card) => {
                return <img src={`/assets/svg/${card}.svg`} alt="card"></img>
              })
            }
          </Hand>
        </div>
        <div>
          <h2>Macs</h2>
          <Hand>
          {
              macsHand.map((card) => {
                return <img src={`/assets/svg/${card}.svg`} alt="card"></img>
              })
            }
          </Hand>
        </div>
        <div>
          <h3>Bet Pot</h3>
          <p>Winnings: 300</p>

          <h3>Hand Value:</h3>
          <p>{}</p>
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
