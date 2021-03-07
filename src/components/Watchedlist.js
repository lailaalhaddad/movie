import { observer } from "mobx-react";
import movieStore from "../movieStore";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Watched from "./Watched";

const Watchedlist = () => {
  const [query, setQuery] = useState("");
  const filteredmovies = movieStore.movies.filter(
    (movie) =>
      movie.name.toLowerCase().includes(query.toLowerCase()) &&
      movie.status === false
  );
  const watchedList = filteredmovies.map((movie) => (
    <Watched movie={movie} key={movie.id} />
  ));

  return (
    <div>
      <p>Watchedlist</p>
      <SearchBar setQuery={setQuery} />
      {watchedList}
    </div>
  );
};
export default observer(Watchedlist);
