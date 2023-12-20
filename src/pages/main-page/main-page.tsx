import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import MainPageCatalog from '../../components/main-page-catalog/main-page-catalog';
import {ReactElement} from 'react';
import {AuthorizationStatus} from "../../const/authorization-status";

type AppScreenProps = {
  authorizationStatus: AuthorizationStatus;
}

function MainPage({authorizationStatus}: AppScreenProps): ReactElement {
  return (
    <>
      <PromoFilmCard authorizationStatus={authorizationStatus}/>
      <MainPageCatalog />
    </>
  );
}

export default MainPage;
