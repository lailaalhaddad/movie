import { observer } from "mobx-react";
import movieStore from "../movieStore";
import { DeleteButtonStyled, WatchButtonStyled } from "../styles";

const Watched = (props) => {
  const movie = props.movie;
  return (
    <div>
      <p>{movie.name}</p>
      <WatchButtonStyled onClick={() => (movie.stat = true)}>
        Unwatch
      </WatchButtonStyled>
      <DeleteButtonStyled onClick={() => movieStore.removeMovie(movie.id)}>
        Delete
      </DeleteButtonStyled>
    </div>
  );
};
export default observer(Watched);
