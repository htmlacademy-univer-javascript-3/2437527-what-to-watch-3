import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import MainPageCatalog from '../../components/main-page-catalog/main-page-catalog';
import {Film} from '../../types/film-type';
import {PromoFilm} from '../../types/promo-film-type';

export const Genres = ['All genres-list', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror',
  'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];

type AppScreenProps = {
  promoFilm: PromoFilm;
  films: Film[];
}

function MainPage({promoFilm, films}: AppScreenProps): JSX.Element {
  return (
    <>
      <PromoFilmCard {...promoFilm}/>
      <MainPageCatalog {...films}/>
    </>
  );
}

export default MainPage;
