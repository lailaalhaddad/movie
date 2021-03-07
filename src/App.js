import MovieCreate from "./components/MovieCreate";
import WatchList from "./components/Watchlist";
import { observer } from "mobx-react";
import movieStore from "./movieStore";
import Watchedlist from "./components/Watchedlist";
function App() {
  return (
    <div>
      <div>
        <h1>Movies Library</h1>
      </div>
      <MovieCreate />
      <div>
        <div>
          <WatchList movies={movieStore.movies} />
        </div>
        <div>
          <Watchedlist movies={movieStore.movies} />
        </div>
      </div>
    </div>
  );
}

export default observer(App);
