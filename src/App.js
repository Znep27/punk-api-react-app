import { Component } from 'react';
import axios from 'axios';
import './App.css';
import BeerCard from './BeerCard';

class App extends Component {
  constructor() {
    super()

    this.state = {
      isClicked: false,
      arrayOfBeer: [],
      likedBeer: []
    }

  }

  onClickHandler = () => {
    this.setState({
      ...this.state,
      isClicked: !this.state.isClicked
    })
  }

  // onLikeHandler = (index) => {

  // }

  componentDidMount () {
     axios.get('https://api.punkapi.com/v2/beers')
      .then( res => {
        const arrayOfBeer = res.data
        this.setState({ arrayOfBeer })
      })
  }
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ol>{this.state.arrayOfBeer.map((beer, index) => {
            return (
              <div><BeerCard key={index} name={beer.name} tagline={beer.tagline} first_brewed={beer.first_brewed}
               description={beer.description} image_url={beer.image_url} abv={beer.abv}  />
              <button onClick={this.onClickHandler}>{this.state.isClicked ? 'Like' : 'Unlike'}</button><br /><br /></div>
            )
          })}</ol>
        </header>
      </div>
    )
  }
}

export default App;
