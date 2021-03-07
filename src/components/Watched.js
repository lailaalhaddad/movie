import { observer } from "mobx-react";
import movieStore from "../movieStore";

const Watched = (props) => {
  const movie = props.movie;
  return (
    <div>
      <p>{movie.name}</p>
      <button onClick={() => (movie.status = false)}>Unwatch</button>
      <button onClick={() => movieStore.removeMovie(movie.id)}>Delete</button>
    </div>
  );
};
export default observer(Watched);
