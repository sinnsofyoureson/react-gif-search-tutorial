import React, { Component } from 'react';
import './App.css';
import request from 'superagent';

import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

class App extends Component {

  constructor() {
    super();

    this.state = {
      gifs: []
    }
  }

  handleTermChange = (term) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=RQ6eqXHIgjE98KJkT7YeLcH5GBh4vB6L&q=${term.replace(/\s/g, '+')}&limit=27&offset=0&rating=R`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <SearchBar onTermChange={this.handleTermChange} />
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
