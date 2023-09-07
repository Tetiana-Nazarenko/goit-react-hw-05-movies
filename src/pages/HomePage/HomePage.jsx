import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'API';
import { TrendingMovies } from 'components/TrendingMovies';

//*** */
import { TrendingContainer, TrendingTitle } from './HomePage.styled';

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
    <TrendingContainer>
      <TrendingTitle>Trending today</TrendingTitle>
      <TrendingMovies movies={trendingList} />
    </TrendingContainer>
  );
};
export default HomePage;
