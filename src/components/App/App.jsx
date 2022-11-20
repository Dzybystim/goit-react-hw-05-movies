import {Routes, Route} from 'react-router-dom';
import {NavigationBox} from './App.styled';
import AppBar from 'components/AppBar/AppBar'

import Home from 'components/Home/Home'
import Movies from 'pages/Movies/Movies'
import MovieDetails from 'components/MovieDetails/MovieDetails'
import Cast from 'components/Cast/Cast'
import Reviews from 'components/Reviews/Reviews'
import NotFound from 'components/NotFound/NotFound'


export const App = () => {
  return (
    <>
    <NavigationBox>
      <AppBar />
    </NavigationBox>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route index element={<Home/>} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>   
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
  );
};
