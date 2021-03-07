import { observer } from "mobx-react";
import movies from "./movies";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Watch from "./Watch";
import movieStore from "../movieStore";

const WatchList = () => {
  const [query, setQuery] = useState("");
  const filteredmovies = movieStore.movies.filter(
    (movie) =>
      movie.name.toLowerCase().includes(query.toLowerCase()) &&
      movie.status === true
  );
  const watchList = filteredmovies.map((movie) => (
    <Watch movie={movie} key={movie.id} />
  ));

  return (
    <div>
      <p>Watchlist</p>
      <SearchBar setQuery={setQuery} />
      {watchList}
    </div>
  );
};
export default observer(WatchList);
