import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getQueryMovies } from 'API';
import { QueryMovies } from 'components/QueryMovies';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';

//****
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    async function handleQueryMovies() {
      try {
        setLoading(true);
        const { results } = await getQueryMovies(query);
        const movies = results.map(({ id, title }) => ({
          id,
          title,
        }));
        setMovieList(movies);

        if (results.length === 0) {
          toast.success('Search completed, but nothing found!');
        }
      } catch (error) {
        console.log(`An error occurred: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    handleQueryMovies();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    setSearchParams({
      query: form.elements.query.value,
    });
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {loading ? <Loader /> : <QueryMovies movies={movieList} />}
    </div>
  );
};

export default MoviesPage;
