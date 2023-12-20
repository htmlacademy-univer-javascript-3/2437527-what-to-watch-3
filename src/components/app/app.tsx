import MainPage from '../../pages/main-page/main-page';
import {Routes, Route} from 'react-router-dom';
import {AppRoutes} from '../../const/app-routes';
import SignIn from '../../pages/sign-in/sign-in';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-rewiew';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Player from '../../pages/player/player';
import {ReactElement} from 'react';
import {useAppSelector} from '../../hooks/hooks';
import MyList from '../../pages/my-list/my-list';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../history-route/browser-history';
import HistoryRouter from '../history-route/history-route';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AuthorizationStatus} from "../../const/authorization-status";


function App(): ReactElement {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={
            <MainPage authorizationStatus={authorizationStatus}/>
          }
        />
        <Route
          path={AppRoutes.SignIn}
          element={
            authorizationStatus === AuthorizationStatus.Auth
              ? <MainPage authorizationStatus={authorizationStatus}/>
              : <SignIn />
          }
        />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Film(':id')}
          element={<MoviePage authorizationStatus={authorizationStatus}/>}
        />
        <Route
          path={AppRoutes.AddReview(':id')}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Player(':id')}
          element={<Player />}
        />
        <Route
          path={AppRoutes.NotFound}
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
