import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import MainPageCatalog from '../../components/main-page-catalog/main-page-catalog';
import {Film, PromoFilm} from '../../types/film-type';
import {ReactElement} from 'react';

type AppScreenProps = {
  promoFilm: PromoFilm;
  films: Film[];
}

function MainPage({promoFilm, films}: AppScreenProps): ReactElement {
  return (
    <>
      <PromoFilmCard {...promoFilm}/>
      <MainPageCatalog films={films}/>
    </>
  );
}

export default MainPage;
