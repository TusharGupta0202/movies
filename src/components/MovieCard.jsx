const MovieCard = ({ movie }) => {
  const {
    title,
    release_date,
    vote_average,
    poster_path,
    original_language
  } = movie;

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : '/no-movie.png';

  return (
    <li className="movie-card">
      <img
        src={posterUrl}
        alt={`Poster of ${title}`}
        loading="lazy"
        onError={(e) => {
          e.target.src = '/no-movie.png';
        }}
      />

      <div className="mt-4">
        <h3>{title || 'Untitled'}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Rating star" />
            <p>{vote_average?.toFixed(1) ?? 'N/A'}</p>
          </div>

          <span>•</span>
          <p className="lang">{original_language || 'N/A'}</p>

          <span>•</span>
          <p className="year">
            {release_date?.split('-')[0] ?? 'N/A'}
          </p>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
