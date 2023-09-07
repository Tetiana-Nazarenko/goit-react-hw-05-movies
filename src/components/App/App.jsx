import { Routes, Route, NavLink } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import styled from 'styled-components';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviePage/MoviesPage';
import SingleMoviePage from 'pages/SingleMoviePage/singleMoviePage';

//*** */
import MoviesCast from '../Cast/Cast';
import MoviesReviews from '../Reviews/Reviews';
//*** */
import { List } from './App.styled';

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
        <List>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </List>
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
