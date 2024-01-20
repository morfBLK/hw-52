import './App.css';
import Card from "./Card/Card";
import playCard from "./Card/PlayCard";
import CardDeck from "./Card/CardDeck";
import {useRef, useState} from "react";
import Combination from "./Card/Combination";
import PlayCard from "./Card/PlayCard";


function App() {

  const [deck, setDeck] = useState<playCard[]>([]);
  const [win, setWin] = useState('');
  const ref = useRef(deck);
  const dealCards = () => {
    const newDeck = new CardDeck();
    const flop = newDeck.getCards(5);
    ref.current = newDeck.deck;
    setDeck(flop);
    setWin(new Combination(flop).getOutcome());
    if (win === 'flash') {
      alert('Win Flash');
    }
  };

  const changeCard = (number: number) => {
    const random = Math.floor(Math.random() * ref.current.length);
    const replacedCard = ref.current.splice(random, 1);
    const floop: PlayCard[] = [...deck];
    floop.splice(number, 1, replacedCard[0]);
    setDeck(floop);
    setWin(new Combination(floop).getOutcome());
    if (win === 'flash') {
      alert('Win Flash');
    }
  };

  let disabled = false;
  if (ref.current.length < 1) {
    disabled = true;
  }

  if (!deck.length) {
    return (
      <button onClick={dealCards}>Раздать</button>
    );

  } else {
    return (
      <div>
        <button onClick={dealCards}>Раздать</button>
        <div>
          <span className='win-combination'>{win}</span>
        </div>
        <div className='cards-box'>
          <div>
            <Card rank={deck[0].rank} suit={deck[0].suit}/>
            <button disabled={disabled} onClick={() => changeCard(0)}>Заменить</button>
          </div>
          <div>
            <Card rank={deck[1].rank} suit={deck[1].suit}/>
            <button disabled={disabled} onClick={() => changeCard(1)}>Заменить</button>
          </div>
          <div>
            <Card rank={deck[2].rank} suit={deck[2].suit}/>
            <button disabled={disabled} onClick={() => changeCard(2)}>Заменить</button>
          </div>
          <div>
            <Card rank={deck[3].rank} suit={deck[3].suit}/>
            <button disabled={disabled} onClick={() => changeCard(3)}>Заменить</button>
          </div>
          <div>
            <Card rank={deck[4].rank} suit={deck[4].suit}/>
            <button disabled={disabled} onClick={() => changeCard(4)}>Заменить</button>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
