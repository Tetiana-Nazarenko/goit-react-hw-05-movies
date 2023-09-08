//import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import {
  MovieDetailsBlock,
  MovieTextBlock,
  AddList,
} from './MovieDetails.styled';

export const MoviesDetails = ({ movieDetails }) => {
  const imageURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <MovieDetailsBlock>
      <MovieTextBlock>
        <img
          src={`${imageURL}${movieDetails.poster_path}`}
          //src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt=""
          width="300"
        />
        <div>
          <h2>{movieDetails.title}</h2>
          <p>User Score: {movieDetails.vote_average}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieDetails.genres &&
              movieDetails.genres.map(genre => (
                <li key={genre.id}>{genre.name} </li>
              ))}
          </ul>
        </div>
      </MovieTextBlock>
      <hr />
      <h3>Additional information</h3>
      <AddList>
        <li>
          <Link to="cast"> Cast</Link>
        </li>
        <li>
          <Link to="reviews"> Reviews </Link>
        </li>
      </AddList>
      <hr />
      <Outlet />
    </MovieDetailsBlock>
  );
};
