import MovieCreate from "./components/MovieCreate";
import WatchList from "./components/Watchlist";
import { observer } from "mobx-react";
import movieStore from "./movieStore";
import Watchedlist from "./components/Watchedlist";
import { ListWrapper, Title } from "./styles";
function App() {
  return (
    <div>
      <div>
        <Title>Movies Library</Title>
      </div>
      <div>
        <MovieCreate />
      </div>
      <ListWrapper>
        <div>
          <WatchList movies={movieStore.movies} />
        </div>
        <div>
          <Watchedlist movies={movieStore.movies} />
        </div>
      </ListWrapper>
    </div>
  );
}

export default observer(App);
