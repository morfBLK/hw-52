import './App.css';
import Card from "./Card/Card";
import playCard from "./Card/PlayCard";
import CardDeck from "./Card/CardDeck";
import {useRef, useState} from "react";


function App() {

  const [deck, setDeck] = useState<playCard[]>([]);
  const ref = useRef(deck);
  const dealCards = () => {
    const newDeck = new CardDeck();
    const flop = newDeck.getCards(5);
    ref.current = newDeck.deck;
    setDeck(flop);
  };

  if (!deck.length) {
    return (
        <button onClick={dealCards}>Раздать</button>
    );

  } else if (deck.length) {
    return (
      <div>
        <button onClick={dealCards}>Раздать</button>
        <div className='cards-box'>
          <Card rank={deck[0].suit} suit={deck[0].rank}/>
          <Card rank={deck[1].suit} suit={deck[1].rank}/>
          <Card rank={deck[2].suit} suit={deck[2].rank}/>
          <Card rank={deck[3].suit} suit={deck[0].rank}/>
          <Card rank={deck[4].suit} suit={deck[0].rank}/>
        </div>
      </div>
    );
  }

}

export default App;
