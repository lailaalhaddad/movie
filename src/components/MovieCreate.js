import { useState } from "react";
import movieStore from "../movieStore";
import { SearchBarStyled, AddButton } from "../styles";
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
      <AddButton onClick={() => movieStore.addMovie(data)}>+Add</AddButton>
    </div>
  );
};
export default MovieCreate;
