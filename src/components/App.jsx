import { Routes, Route, NavLink } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import styled from 'styled-components';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import SingleMoviePage from 'pages/singleMoviePage';

//*** */
import MoviesCast from './Cast/Cast';
import MoviesReviews from './Reviews/Reviews';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieID" element={<SingleMoviePage />}>
          <Route path="cast" element={<MoviesCast />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: 'white',
          },
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />
    </div>
  );
};
