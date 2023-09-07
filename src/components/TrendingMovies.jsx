import { Link } from 'react-router-dom';
export const TrendingMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <li>{movie.title}</li>
        </Link>
      ))}
    </ul>
  );
};
