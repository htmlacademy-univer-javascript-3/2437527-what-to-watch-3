import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../routes';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-rewiew';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {Film} from '../../types/film-type';
import {Review} from '../../types/review-type';
import {Video} from '../../types/video';
import Player from '../../pages/player/player';
import {PromoFilm} from '../../types/film-type';
import {ReactElement} from 'react';

type AppScreenProps = {
  promoFilm: PromoFilm;
  films: Film[];
  reviews: Review[];
  videoPlayer: Video;
}

function App({promoFilm, films, reviews, videoPlayer}: AppScreenProps): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<MainPage promoFilm={promoFilm} films={films}/>}
        />
        <Route
          path={AppRoutes.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList {...films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Film(':id')}
          element={<MoviePage {...films}/>}
        />
        <Route
          path={AppRoutes.AddReview(':id')}
          element={<AddReview {...reviews}/>}
        />
        <Route
          path={AppRoutes.Player(':id')}
          element={<Player {...videoPlayer}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
