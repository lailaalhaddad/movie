import movies from "../components/movies";
import { makeObservable, observable } from "mobx";

class MovieStore {
  movies = movies;
}
