//import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { getQueryMovies } from 'API';
import QueryMovies from 'components/QueryMovies/QueryMovies';
import { Loader } from 'components/Loader/Loader';

//*** */
import { Form, Input, Button } from './MoviePage.styled';

//****
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      setMovieList([]);
      return;
    }

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
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" />
        <Button type="submit">Search</Button>
      </Form>
      {loading ? <Loader /> : <QueryMovies movies={movieList} />}
    </div>
  );
};

export default MoviesPage;
