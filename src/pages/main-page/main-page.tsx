import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import MainPageCatalog from '../../components/main-page-catalog/main-page-catalog';
import {FilmPreview, PromoFilm} from '../../types/film-types';
import {ReactElement} from 'react';
import {AuthorizationStatus} from '../../routes';

type AppScreenProps = {
  filmPreviews: FilmPreview[];
  promoFilm: PromoFilm;
  authorizationStatus: AuthorizationStatus;
}

function MainPage({filmPreviews, promoFilm, authorizationStatus}: AppScreenProps): ReactElement {
  return (
    <>
      <PromoFilmCard promoFilm={promoFilm} authorizationStatus={authorizationStatus}/>
      <MainPageCatalog filmPreviews={filmPreviews}/>
    </>
  );
}

export default MainPage;
