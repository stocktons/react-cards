import React, { useState, useEffect } from "react";
import axios from "axios";

const drawCardURL = `http://deckofcardsapi.com/api/deck/`;
const newDeckURL = `http://deckofcardsapi.com/api/deck/new`;

let deckId;

/** Cards: shows cards drawn from API */

function Cards() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchDeckWhenMounted() {
    async function fetchDeck() {
      const cardResult = await axios.get(newDeckURL);
      deckId = cardResult.data.deck_id;
      setProfile(userResult.data);
      setIsLoading(false);
    }
    fetchUser();
  }, []);

  useEffect(function fetchCardWhenMounted() {
    async function fetchCard() {
      const cardResult = await axios.get(`${drawCardURL}/${deckId}/draw/?count=1`);
      setProfile(userResult.data);
      setIsLoading(false);
    }
    fetchUser();
  }, [cards]);

  if (isLoading) return <i>Loading...</i>;

  return (
      <div>
        <b>{`${profile.name} is ${profile.bio}`}</b>
      </div>
  );
}
// end

export default ProfileViewer;