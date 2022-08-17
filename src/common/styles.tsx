import styled from "styled-components";

export const FontSizes = {
  extraLarge: "2.5em",
  large: "1.5em",
  regular: "1em",
  small: "0.8em",
};

export const Colours = {
  darkBlue: "#15313F",
  darkGreen: "#3C9681",
  darkOrange: "#FD370B",
  lightYellow: "#F0EFBD",
  lightGreen: "#97D0B4",
  white: "#ffffff",
};

export const ScreenContainer = styled.div`
  display: flex;
  max-width: 800px;
  min-width: 300px;
  justify-content: center;
  flex-flow: column;
  background: ${Colours.lightYellow};
  max-height: 700px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

export const ButtonPrimary = styled.button`
  border-radius: 10px;
  border: 2px solid ${Colours.darkGreen};
  padding: 20px;
  max-width: 400px;
  font-size: 2rem;
  background: ${Colours.white};
  color: ${Colours.darkGreen};
`;
