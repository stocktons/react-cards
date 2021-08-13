import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card"

const drawCardURL = `http://deckofcardsapi.com/api/deck/`;
const newDeckURL = `http://deckofcardsapi.com/api/deck/new`;



/** Cards: shows cards drawn from API */

function Cards() {
  const [cards, setCards] = useState([]);
  const [deckId, setDeckId] = useState(null);
  const [drawToggle, setDrawToggle] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchDeckWhenMounted() {
    async function fetchDeck() {
      const newDeck = await axios.get(newDeckURL);
      setDeckId(newDeck.data.deck_id);
      // setIsLoading(false);
    }
    fetchDeck();
  }, []);

  useEffect(function fetchCard() {
    async function fetchCard() {
      const cardResult = await axios.get(`${drawCardURL}/${deckId}/draw/?count=1`);
      const newCard = cardResult.data.cards[0];
      setCards(cards => [...cards, newCard ]);
      // setIsLoading(false);
    }
    fetchCard();
  }, [drawToggle]);

  function drawCard() {
    setDrawToggle(!drawToggle);
  }

  // if (isLoading) return <i>Loading...</i>;

  return (
      <div>
        <button onClick={drawCard}>Get A Card!</button>
      <div>{cards.length === 52 ? "Error: no cards remaining!" : ""}</div>
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