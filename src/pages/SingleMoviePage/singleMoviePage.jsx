import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

import { getMoviesDetails } from 'API';

import MoviesDetails from 'components/movieDetails/MovieDetails';
import { Loader } from 'components/Loader/Loader';
//*** */
import { GoBack } from './SingleMoviePage.styled';

const SingleMoviePage = () => {
  const { movieID } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    async function handleIdMovie() {
      try {
        setLoading(true);
        const movie = await getMoviesDetails(movieID);
        setMovieInfo(movie);
      } catch (error) {
        console.log(`An error occurred: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    handleIdMovie();
  }, [movieID]);

  return (
    <>
      <GoBack>
        <Link to={backLink}> &#8656; Go back</Link>
      </GoBack>

      {loading ? <Loader /> : <MoviesDetails movieDetails={movieInfo} />}
    </>
  );
};
export default SingleMoviePage;
