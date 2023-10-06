import MainPage from '../pages/main-page/main-page';

type PromoFilmData = {
  title: string;
  genre: string;
  year: string;
};

function App({title, genre, year}: PromoFilmData): JSX.Element {
  return (
    <MainPage title={title} genre={genre} year={year}/>
  );
}

export default App;
