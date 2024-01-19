import './App.css';
import Card from "./Card/Card";
import playCard from "./Card/PlayCard";
import CardDeck from "./Card/CardDeck";
import {useRef, useState} from "react";
import Combination from "./Card/Combination";


function App() {

  const [deck, setDeck] = useState<playCard[]>([]);
  const [win, setWin] =useState('');
  const ref = useRef(deck);
  const dealCards = () => {
    const newDeck = new CardDeck();
    const flop = newDeck.getCards(5);
    ref.current = newDeck.deck;
    setDeck(flop);
    setWin(new Combination(flop).getOutcome());
    if (win === 'flash') {
      alert('WIN Flash');
    }
  };

  if (!deck.length) {
    return (
        <button onClick={dealCards}>Раздать</button>
    );

  } else if (deck.length) {
    return (
      <div>
        <button onClick={dealCards}>Раздать</button>
        <div>
          <span>{win}</span>
        </div>
        <div className='cards-box'>
          <Card rank={deck[0].rank} suit={deck[0].suit}/>
          <Card rank={deck[1].rank} suit={deck[1].suit}/>
          <Card rank={deck[2].rank} suit={deck[2].suit}/>
          <Card rank={deck[3].rank} suit={deck[0].suit}/>
          <Card rank={deck[4].rank} suit={deck[0].suit}/>
        </div>
      </div>
    );
  }

}

export default App;
