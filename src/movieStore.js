import movies from "./components/movies";
import { action, makeObservable, observable } from "mobx";

class MovieStore {
  movies = movies;

  addMovie = (data) => {
    let newMovie = data;
    newMovie.id = this.movies.length + 1;
    console.log(newMovie);
    this.movies.push(newMovie);
    console.log(this.movies);
  };

  removeMovie = (id) => {
    this.movies = this.movies.filter((cv) => cv.id !== id);
  };

  constructor() {
    makeObservable(this, {
      movies: observable,
      removeMovie: action,
      addMovie: action,
    });
  }
}

const movieStore = new MovieStore();

export default movieStore;
