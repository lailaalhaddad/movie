const SearchBar = (props) => {
  return (
    <div>
      <input
        onChange={(event) => props.setQuery(event.target.value)}
        placeholder="Search movies..."
      />
    </div>
  );
};
export default SearchBar;
