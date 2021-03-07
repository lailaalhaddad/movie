import { useState } from "react";
import movieStore from "../movieStore";

const MovieCreate = () => {
  const [data, setData] = useState("");

  return (
    <div>
      <input
        onChange={(event) => setData(event.target.value)}
        type="text"
        name="Movie"
      />
      <button onClick={() => movieStore.addMovie(data)}>+Add</button>
    </div>
  );
};
export default MovieCreate;
