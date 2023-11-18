import MainPage from '../../pages/main-page/main-page';
import {Routes, Route} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../routes';
import SignIn from '../../pages/sign-in/sign-in';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-rewiew';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {FilmPreview} from '../../types/film-type';
import {ReviewPage} from '../../types/review-page-type';
import {Video} from '../../types/video';
import Player from '../../pages/player/player';
import {PromoFilm} from '../../types/film-type';
import {ReactElement} from 'react';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import MyList from '../../pages/my-list/my-list';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';

type AppScreenProps = {
  reviews: ReviewPage[];
  videoPlayer: Video;
}

function App({reviews, videoPlayer}: AppScreenProps): ReactElement {
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);
  const filmPreviews : FilmPreview[] = useAppSelector((state) => state.filmPreviews);
  const promoFilm : PromoFilm = useAppSelector((state) => state.promoFilm);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<MainPage filmPreviews={filmPreviews} promoFilm={promoFilm}/>}
        />
        <Route
          path={AppRoutes.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList filmPreviews={filmPreviews}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Film(':id')}
          element={<MoviePage />}
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
    </HistoryRouter>
  );
}

export default App;
