import { useLocation, Link } from 'react-router-dom';
import { List } from './QueryMovies.styled';

const QueryMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <Link
          state={{ from: location }}
          to={`/movies/${movie.id}`}
          key={movie.id}
        >
          <li>{movie.title}</li>
        </Link>
      ))}
    </List>
  );
};
export default QueryMovies;
