const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <label htmlFor="movie-search" className="sr-only">
        Search movies
      </label>

      <div>
        <img src="search.svg" alt="Search icon" />

        <input
          id="movie-search"
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />

        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
