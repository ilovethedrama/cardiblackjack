export function dealACard(cardDeck: Array<string>): string {
  const selectedCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
  return selectedCard;
}

export function GetValueOfCard(singleCard: string): string {
  const value = singleCard.substring(0, singleCard.indexOf(","));
  return value;
}

export function ConvertCardValue(singleCard: string): number {
  switch (singleCard.toLowerCase()) {
    case "jack":
    case "king":
    case "queen":
    case "ace":
      return 10;
    case "red":
    case "black":
      return 11;
    default:
      return +singleCard;
  }
}

export function calculateHandValue(currentHand: Array<number>) {
    const totalHandValue = currentHand.reduce((initialCard: number, nextCard: number) => initialCard + nextCard, 0)
    return totalHandValue;
}