import { observer } from "mobx-react";
import movieStore from "../movieStore";
import { DeleteButtonStyled, WatchButtonStyled } from "../styles";
const Watch = (props) => {
  const movie = props.movie;
  return (
    <div>
      <p>{movie.name}</p>
      <WatchButtonStyled onClick={() => (movie.stat = false)}>
        Watched
      </WatchButtonStyled>
      <DeleteButtonStyled onClick={() => movieStore.removeMovie(movie.id)}>
        Delete
      </DeleteButtonStyled>
    </div>
  );
};
export default observer(Watch);
