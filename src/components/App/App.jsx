import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SharedLayout from 'components/SharedLayout';

//import styled from 'styled-components';
// import { List } from './App.styled';

//import HomePage from 'pages/HomePage/HomePage';
//import MoviesPage from 'pages/MoviePage/MoviesPage';
// import SingleMoviePage from 'pages/SingleMoviePage/singleMoviePage';

// import MoviesCast from '../Cast/Cast';
// import MoviesReviews from '../Reviews/Reviews';
//*** */

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviePage/MoviesPage'));
const SingleMoviePage = lazy(() =>
  import('../../pages/SingleMoviePage/singleMoviePage')
);
const MoviesCast = lazy(() => import('../Cast/Cast'));
const MoviesReviews = lazy(() => import('../Reviews/Reviews'));

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

const App = () => {
  return (
    <>
      {/* <nav>
     <List>
     <li>
         <StyledLink to="/">Home</StyledLink>
           </li>
           <li>
             <StyledLink to="/movies">Movies</StyledLink>
           </li>
         </List>
       </nav>
       <hr /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieID" element={<SingleMoviePage />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="reviews" element={<MoviesReviews />} />
          </Route>
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
    </>
  );
};
export default App;
