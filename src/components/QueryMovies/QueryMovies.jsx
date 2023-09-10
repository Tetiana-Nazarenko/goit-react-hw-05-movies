import { Link } from 'react-router-dom';
import { List } from './QueryMovies.styled';

const QueryMovies = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <li>{movie.title}</li>
        </Link>
      ))}
    </List>
  );
};
export default QueryMovies;
