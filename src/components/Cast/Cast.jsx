import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'API';
import { Loader } from 'components/Loader/Loader';
import { CastDetails } from './CastDetails';

const MoviesCast = () => {
  const { movieID } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (!movieID) return;

    async function handleMovieCast() {
      try {
        // setLoading(true);
        const { cast } = await getMoviesCast(movieID);
        const castInfo = cast.map(({ id, name, character, profile_path }) => ({
          id,
          name,
          character,
          profile_path,
        }));
        setMovieCast(castInfo);
      } catch (error) {
        console.log(`An error occurred: ${error.message}`);
      }
      //   finally {
      //     setLoading(false);
      //   }
    }
    handleMovieCast();
  }, [movieID]);

  return (
    <div>
      <CastDetails castInfo={movieCast} />
    </div>
  );
};
export default MoviesCast;
