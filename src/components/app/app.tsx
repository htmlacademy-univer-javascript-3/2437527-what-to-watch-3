import MainPage from '../../pages/main-page/main-page';
import {Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../routes';
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
import {getFilmPreviews, getPromoFilm} from '../../store/films/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

type AppScreenProps = {
  reviews: ReviewPage[];
  videoPlayer: Video;
}

function App({videoPlayer}: AppScreenProps): ReactElement {
  const filmPreviews : FilmPreview[] = useAppSelector(getFilmPreviews).filmPreviews;
  const isFilmPreviewsLoaded : boolean = useAppSelector(getFilmPreviews).isLoaded;
  const promoFilm : PromoFilm = useAppSelector(getPromoFilm).promoFilm as PromoFilm;
  const isPromoFilmLoaded : boolean = useAppSelector(getPromoFilm).isLoaded;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || !isFilmPreviewsLoaded || !isPromoFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage filmPreviews={filmPreviews} promoFilm={promoFilm}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={
            authorizationStatus === AuthorizationStatus.Auth
              ? <MainPage filmPreviews={filmPreviews} promoFilm={promoFilm}/>
              : <SignIn />
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList filmPreviews={filmPreviews}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film(':id')}
          element={<MoviePage authorizationStatus={authorizationStatus}/>}
        />
        <Route
          path={AppRoute.AddReview(':id')}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player(':id')}
          element={<Player {...videoPlayer}/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
