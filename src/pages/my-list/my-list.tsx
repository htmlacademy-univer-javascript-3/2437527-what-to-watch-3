import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import FilmsList from '../../components/films-list/films-list';
import React, {ReactElement} from 'react';
import UserBlock from '../../components/user-block/user-block';
import {getFavorites} from '../../store/favorites/selectors';
import {useAppSelector} from '../../hooks';
import {FilmPreview} from '../../types/film-type';
import LoadingScreen from '../../components/loading-screen/loading-screen';

function MyList(): ReactElement {
  const favorites : FilmPreview[] = useAppSelector(getFavorites).favorites;
  const isFavoritesLoaded : FilmPreview[] = useAppSelector(getFavorites).favorites;

  if (!isFavoritesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{Object.keys(favorites).length}</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList filmPreviews={favorites}/>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
