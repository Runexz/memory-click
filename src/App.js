import React, { Component } from 'react';

import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';

// Import the cards from json list that has images links in it.
import cardImages from "./cardImages.json";

// Creates constructor props from cards to set the top and current score to 0
// topScore is the most cards clicked without being clicked again
// currentScore is the most clicked this round without being clicked again and will reset to 0 if duplicated
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardImages: cardImages,
      topScore: 0,
      currentScore: 0,
    };
    this.checkIfClicked = this.checkIfClicked.bind(this);
  }

  // This function will see if a card has been clicked
  checkIfClicked(id) {

    // Create a copy of the cards with a random math method to sort the array
    let clickedCard = this.state.cardImages.filter(card => card.id === id)[0];
    let cardsCopy = this.state.cardImages.slice().sort(function (a, b) { return 0.5 - Math.random() });

    // If a card has not been clicked then set its click state to true
    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      cardsCopy[cardsCopy.findIndex((card) => card.id === id)] = clickedCard;

      // Set the STATE and increments the counter
      this.setState({
        cardImages: cardsCopy,
        currentScore: this.state.currentScore + 1,
        topScore: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore),
      });
    }

    // If a card has already been clicked then set its click to false and reset the game
    else {
      alert("You clicked the same image! Start over!");
      let resetCardsCopy = cardsCopy.map((card) => {
        return {
          id: card.id,
          image: card.image,
          clicked: false,
        }
      });
      this.setState({
        cardImages: resetCardsCopy,
        currentScore: 0,
      });

    }
  }

  render() {
    return (
      <div className="container">
        <Header currentScore={this.state.currentScore} topScore={this.state.topScore} />
        <Wrapper>
          {this.state.cardImages.map(card => (
            <Card
              checkIfClicked={this.checkIfClicked}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
