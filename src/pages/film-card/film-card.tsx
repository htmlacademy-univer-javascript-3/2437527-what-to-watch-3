import {Film} from '../main-page/main-page';

function FilmCard(): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={Film.src} alt={Film.alt}
          width={Film.width} height={Film.height}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{Film.title}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
