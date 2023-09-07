import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'API';
import { TrendingMovies } from 'components/TrendingMovies';

const HomePage = () => {
  const [trendingList, setTrendingList] = useState([]);

  async function fetchTrendingMovies() {
    try {
      const { results } = await getTrendingMovies();

      const movies = results.map(({ id, title }) => ({
        id,
        title,
      }));
      setTrendingList(movies);
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  }
  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <TrendingMovies movies={trendingList} />
    </div>
  );
};
export default HomePage;
