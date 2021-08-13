import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card"

const DRAW_CARD_URL = `http://deckofcardsapi.com/api/deck`;
const NEW_DECK_URL = `http://deckofcardsapi.com/api/deck/new`;



/** Cards: shows cards drawn from API */

function Cards() {
  const [cards, setCards] = useState([]);
  const [deckId, setDeckId] = useState(null);
  const [shouldDrawToggle, setShouldDrawToggle] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  console.log("Cards", cards, deckId, shouldDrawToggle);

  useEffect(function fetchDeckWhenMounted() {
    async function fetchDeck() {
      console.log("fetching deck!!!");
      const newDeck = await axios.get(NEW_DECK_URL);
      setDeckId(newDeck.data.deck_id);
      // setIsLoading(false);
    }
    fetchDeck();
  }, []);

  useEffect(function fetchCard() {
    async function fetchCard() {
      console.log("fetching card!!!");
      const cardResult = await axios.get(`${DRAW_CARD_URL}/${deckId}/draw/?count=1`);
      const newCard = cardResult.data.cards[0];
      setCards(cards => [...cards, newCard]);
      // setIsLoading(false);
    }
    if (deckId) {
      fetchCard();
    }
  }, [shouldDrawToggle, deckId]); 

  function drawCard() {
    console.log("about to draw Card!!!");
    if (cards.length < 52) { // TODO: change to handle dynamic number
      console.log("actually drawing card!!!");
      setShouldDrawToggle(!shouldDrawToggle);
    }
  }

  // if (isLoading) return <i>Loading...</i>;

  return (
    <div>
      <button onClick={drawCard}>Get A Card!</button>
      <div>{cards.length >= 52 ? alert("Error: no cards remaining!") : ""}</div>
      <div>
        {cards.map(card => (
          <Card
            id={card.code}
            key={card.code}
            img={card.image}
          />
        ))}
      </div>
    </div>
  );
}
// end

export default Cards;