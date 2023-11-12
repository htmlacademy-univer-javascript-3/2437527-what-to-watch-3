import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import MainPageCatalog from '../../components/main-page-catalog/main-page-catalog';
import {PromoFilm} from '../../types/film-type';
import {ReactElement} from 'react';

type AppScreenProps = {
  promoFilm: PromoFilm;
}

function MainPage({promoFilm}: AppScreenProps): ReactElement {
  return (
    <>
      <PromoFilmCard {...promoFilm}/>
      <MainPageCatalog/>
    </>
  );
}

export default MainPage;
