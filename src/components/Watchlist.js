import { observer } from "mobx-react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Watch from "./Watch";
import movieStore from "../movieStore";
import { Description } from "../styles";
const WatchList = () => {
  const [query, setQuery] = useState("");
  const filteredmovies = movieStore.movies.filter(
    (movie) =>
      movie.name.toLowerCase().includes(query.toLowerCase()) &&
      movie.stat === true
  );
  const watchList = filteredmovies.map((movie) => (
    <Watch movie={movie} key={movie.id} />
  ));

  return (
    <div>
      <Description>Watchlist</Description>
      <SearchBar setQuery={setQuery} />
      {watchList}
    </div>
  );
};
export default observer(WatchList);
