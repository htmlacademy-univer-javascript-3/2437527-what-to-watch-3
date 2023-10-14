import PromoFilmCard from '../promo-film-card/promo-film-card';
import MainPageCatalog from '../main-page-catalog/main-page-catalog';

export const Genres = ['All genres-list', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror',
  'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];

export const FilmsInCatalogCount = 20;

type PromoFilmData = {
  title: string;
  genre: string;
  year: string;
};

function MainPage({title, genre, year}: PromoFilmData): JSX.Element {
  return (
    <>
      <PromoFilmCard Title={title} Genre={genre} Year={year}/>
      <MainPageCatalog />
    </>
  );
}

export default MainPage;
