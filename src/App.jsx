import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import React, {useState, useEffect} from 'react';
import AddCard from './Components/AddCard';
import _ from 'lodash';
import Card from './Components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';




function App() {

  const [allCards, setAllCards] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState("");
  const [sillyMeter, setSillyMeter] = useState("");



  useEffect(() => {

    if(localStorage) {
      const cardsLocalStorage = JSON.parse(localStorage.getItem("cards"));

      if(cardsLocalStorage) {
        saveCards(cardsLocalStorage);
      } else {
        saveCards(cards);
      }
    }
  }, []);


  const saveCards = (cards) => {
    setAllCards(cards);
    setSearchResults(cards);
    if(localStorage) {
      localStorage.setItem("cards", JSON.stringify(cards));
      console.log("saved to local storage");
    }
  };

  const addCard = (newCard) => {
    const updatedCards = [...allCards, newCard];
    saveCards(updatedCards);
  };

  const searchCards = () => {
    let keywordsArray = [];

    if (keywords) {
      keywordsArray = keywords.toLowerCase().split(" ");
    }

    if (keywordsArray.length > 0) {
      const searchResults = allCards.filter((card) => {
        for (const word of keywordsArray) {
          if (
            card.name.toLowerCase().includes(word) ||
            card.rarity.toLowerCase().includes(word)
          ) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
    } else {
      setSearchResults(allCards);
    }
  };

  const removeCard = (cardToDelete) => {
    console.table(cardToDelete);
    const updatedCardsArray = allCards.filter(card => card.id !== cardToDelete.id);
    saveCards(updatedCardsArray);
  }

  const updateCard = (updatedCard) => {
    console.table(updatedCard);
    const updatedCardsArray = allCards.map((card) =>
    card.id === updatedCard.id ? { ...card, ...updatedCard } : card);
    saveCards(updatedCardsArray);
  };

  const cards = [{
    id: nanoid(),
    name: "Bleh Cat",
    rarity: "Rare",
    power: 2000,
    image: "images/bleh.png",
    sillyMeter: 1000
  }, {
    id: nanoid(),
    name: "Crazy Cat",
    rarity: "Uncommon",
    power: 1000,
    image: "images/bleh2.jpg",
    sillyMeter: 1000
  }, {
    id: nanoid(),
    name: "Sniffin Cat",
    rarity: "Common",
    power: 2000,
    image:  "images/bleh3.jpg",
    sillyMeter: 2000
  }, {
    id: nanoid(),
    name: "Weird Cat",
    rarity: "Rare",
    power: 3000,
    image:  "images/bleh4.jpg",
    sillyMeter: 2000
  }, {
    id: nanoid(),
    name: "Money Cat",
    rarity: "Ultra Rare",
    power: 3000,
    image:  "images/cat-money.webp",
    sillyMeter: 5000
  }, {
    id: nanoid(),
    name: "Senior Cat Dev",
    rarity: "Super Rare",
    power: 3500,
    image:  "images/employeecat1.png",
    sillyMeter: 2500
  }, {
    id: nanoid(),
    name: "Junior Cat Dev",
    rarity: "Super Rare",
    power: 2500,
    image:  "images/employeecat2.jpg",
    sillyMeter: 3000
  }, {
    id: nanoid(),
    name: "Nerd Cat",
    rarity: "Rare",
    power: 3500,
    image:  "images/employeecat3.png",
    sillyMeter: 3000
  }, {
    id: nanoid(),
    name: "Spring Cat",
    rarity: "Common",
    power: 1000,
    image:  "images/spring cat.jpg",
    sillyMeter: 3500
  }, {
    id: nanoid(),
    name: "Winter Cat",
    rarity: "Uncommon",
    power: 2500,
    image:  "images/winter cat.jpg",
    sillyMeter: 4000
  }];




 return (
  <div id="big" className="container-fluid">
    <div id="mainContainer" className="container">
     <div className="row" id="allCards">
      <div className="container" id="bigContainer">
        <h1 id="bigHead" className="d-flex text-center justify-content-center"><FontAwesomeIcon icon={faCat} id="happy1" bounce /> Deck Builder App <FontAwesomeIcon icon={faCat} id="happy2" bounce /></h1>
      </div>
        <h2 id="mainHeader" className="d-flex text-center justify-content-center">Build A Deck!</h2>
           <div id="mainText" className="d-flex justify-content-center flex-column">
              <p id="firstText"className="d-flex justify-content-center text-center main-text">Test your skills and form strategies with the new Deck Builder App!</p>
              <p id="middleText"className="d-flex justify-content-center text-center main-text">Silly Cat Trading Card Game Company&copy; allows anyone to build a deck of powerful and silly trading cards.</p>
              <p id="lastText" className="d-flex justify-content-center text-center main-text">Your creativity and silliness are the limits!</p>
              <div className="d-flex justify-content-center">
                <button type="button" id="addCardBtn" className="d-flex justify-content-center text-center btn btn-outline-primary">
                  <a href="#addCard">Start Adding Cards!</a>
                </button>
              </div>
           </div>
        <div className="row d-flex justify-content-center mt-4" id="searchCards">
       <h3 id="searchHeader" className="d-flex text-center justify-content-center">Search Trading Cards</h3>
       <div className="col-md-6 col-sm-12">
         <label htmlFor="txtKeywords" id="searchLabel">Search by Name or Rarity</label>
         <input
           type="text"
           className="form-control"
           id="searchInput"
           placeholder=" Enter Name or Rarity"
           onChange={(evt) => setKeywords(evt.currentTarget.value)}
           value={keywords}
         />
       </div>
       <div className="col-md-4 col-sm-12">
          <a href="#deckHeader">
          <button
           type="button"
           className="btn btn-outline-primary"
           onClick={searchCards}
           id="searchSelect"
         >
          
           Search Trading Cards <FontAwesomeIcon icon={faSearch} id="searchIcon" />
         </button>
         </a>
       </div>
      </div> 
        <h3 id="deckHeader" className="d-flex text-center justify-content-center">Your Current Cards</h3>
       {searchResults &&
         searchResults.map((card) => (
           <div id="deck" className="col-md-4 col-sm-12" key={card.id}>
             <Card card={card} removeCard={removeCard} updateCard={updateCard} />
           </div>
         ))}
         <div className="row d-flex justify-content-center">
         <div className="d-flex flex-column" id="iconDescription">
          <div id="gem" className="d-flex justify-content-center"><div id="test"><FontAwesomeIcon icon={faGem} id="spinGem" flip /></div><p id="spinGemText"> - Rarity</p></div>
          <div id="fist" className="d-flex justify-content-center"><FontAwesomeIcon icon={faHandFist} id="spinFist" flip /><p id="spinFistText"> - Power Level</p></div>
          <div id="shield" className="d-flex justify-content-center"><FontAwesomeIcon icon={faShieldCat} id="spinShield" flip /><p id="spinShieldText"> - Silly Level</p></div>
        </div>
          <div className="col-sm-12 d-flex justify-content-center">
            <AddCard addCard={addCard} />
          </div>
         </div>
      </div>
      
   </div>
  </div>
 );
}

export default App;
