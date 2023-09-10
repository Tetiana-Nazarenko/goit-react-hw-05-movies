import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'API';

import ReviewsDetails from './ReviewDetails';
import { Loader } from 'components/Loader/Loader';

const MoviesReviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieID) return;

    async function handleReviews() {
      try {
        setLoading(true);
        const { results } = await getMoviesReviews(movieID);
        const review = results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));
        setReviews(review);
      } catch (error) {
        console.log(`An error occurred: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    handleReviews();
  }, [movieID]);

  return (
    <div>
      {loading && <Loader />}
      {reviews.length > 0 ? (
        <ReviewsDetails reviews={reviews} />
      ) : (
        <p>We don`t have any reviews for this movie!</p>
      )}
    </div>
  );
};
export default MoviesReviews;
