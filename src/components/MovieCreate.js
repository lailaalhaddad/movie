import { useState } from "react";
import movieStore from "../movieStore";
import { SearchBarStyled } from "../styles";
const MovieCreate = () => {
  const [data, setData] = useState("");

  return (
    <div>
      <SearchBarStyled
        onChange={(event) => setData(event.target.value)}
        type="text"
        name="Movie"
        placeholder="Movies..."
      />
      <button onClick={() => movieStore.addMovie(data)}>+Add</button>
    </div>
  );
};
export default MovieCreate;
