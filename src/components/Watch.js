import { observer } from "mobx-react";
import movieStore from "../movieStore";
const Watch = (props) => {
  const movie = props.movie;
  return (
    <div>
      <p>{movie.name}</p>
      <button onClick={() => (movie.status = true)}>Watched</button>
      <button onClick={() => movieStore.removeMovie(movie.id)}>Delete</button>
    </div>
  );
};
export default observer(Watch);
