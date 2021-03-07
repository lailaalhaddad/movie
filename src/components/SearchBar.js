import { SearchBarStyled } from "../styles";
const SearchBar = (props) => {
  return (
    <div>
      <SearchBarStyled
        onChange={(event) => props.setQuery(event.target.value)}
        placeholder="Search movies..."
      />
    </div>
  );
};
export default SearchBar;
