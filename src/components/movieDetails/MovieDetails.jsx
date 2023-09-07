import { Link, Outlet } from 'react-router-dom';

export const MoviesDetails = ({ movieDetails }) => {
  const imageURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <img
        src={`${imageURL}${movieDetails.poster_path}`}
        //src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt="There schould be a picture"
        width="250"
      />
      <h2>{movieDetails.title}</h2>
      <p>User Score: {movieDetails.vote_average}</p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
      <ul>
        {movieDetails.genres &&
          movieDetails.genres.map(genre => (
            <li key={genre.id}>{genre.name} </li>
          ))}
      </ul>
      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast"> Cast</Link>
        </li>
        <li>
          <Link to="reviews"> Reviews </Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};
