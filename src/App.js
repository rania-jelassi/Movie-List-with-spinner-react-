import React from "react";
import { movies } from "./data";
import "./App.css";
import MovieSearch from "./components/MovieSearch/MovieSearch.js";
import Rate from "./components/Rate/Rate";
import Movielist from "./components/MovieList /MovieList.js";
import Add from "./components/Add/Add";
import WithLoading from "./components/Spinner/Spinner";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FilmDescription from "./components/Description/index";

const ListWithLoading = WithLoading(Movielist);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filtredtab: [],
      minrate: 0,
      filteredTabByRate: [],
      loading: true,
      tab: movies,
      name: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
      console.log("This will run after 2 second!");
    }, 2000);
  }

  ajouterMovie = x => {
    let newState = this.state.tab;
    newState.push(x);
    this.setState({ tab: newState });
  };
  searchFilm = input => {
    this.setState({
      name: input
    });
  };

  sortByRating = rating => {
    this.setState({
      filteredTabByRate: this.state.tab.filter(el => el.rating == rating)
    });
  };
  onChange = newRate => {
    this.setState({
      minrate: newRate
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <div className="head">
                    <MovieSearch searchFilm={this.searchFilm} />
                    <Rate
                      etoile={this.state.minrate}
                      onChange={this.onChange}
                    />
                  </div>
                  <ListWithLoading
                    isLoading={this.state.loading}
                    minrate={this.state.minrate}
                    name={this.state.name}
                    movies={
                      this.state.filtredtab.length == 0
                        ? this.state.tab
                        : this.state.filtredtab
                    }
                  />
                  <Add ajouterMovie={this.ajouterMovie} />
                </div>
              )}
            />
            <Route exact path="/description/:id" component={FilmDescription} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
