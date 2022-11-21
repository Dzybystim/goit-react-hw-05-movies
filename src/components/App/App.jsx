import {Routes, Route} from 'react-router-dom';
import {lazy} from 'react'

import SharedLayout from 'components/SharedLayout/SharedLayout'
import TrendingMovies from 'pages/TrendingMovies/TrendingMovies'


const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'))
const Movies = lazy(() => import('pages/Movies/Movies'))
const Cast = lazy(() => import('components/Cast/Cast'))
const Reviews = lazy(() => import('components/Reviews/Reviews'))

export const App = () => {
  return (
    <>
    <Routes>
    <Route path="/"  element={<SharedLayout />}>
      <Route index element={<TrendingMovies text={"Trending today"} />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<TrendingMovies text={"Trending today"} /> } />
    </Route>
    </Routes>
    </>
  );
};
