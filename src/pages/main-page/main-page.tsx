import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import MainPageCatalog from '../../components/main-page-catalog/main-page-catalog';
import {FilmPreview} from '../../types/film-type';
import {ReactElement} from 'react';

type AppScreenProps = {
  filmPreviews: FilmPreview[];
}

function MainPage({filmPreviews}: AppScreenProps): ReactElement {
  return (
    <>
      <PromoFilmCard/>
      <MainPageCatalog filmPreviews={filmPreviews}/>
    </>
  );
}

export default MainPage;
