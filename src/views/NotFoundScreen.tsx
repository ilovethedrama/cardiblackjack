import React from "react";
import { Link } from "react-router-dom";

import { ScreenContainer, ButtonPrimary } from "../common/styles";

const NotFoundScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <p>Here is the catch all 404 not-found screen</p>
      <img src="/assets/gif/page_not_found.gif" alt="cardi b pulling a funny face"/>
      <Link to={`/gameplay`}>
        <ButtonPrimary>Start A Game</ButtonPrimary>
      </Link>
    </ScreenContainer>
  );
};

export default NotFoundScreen;
