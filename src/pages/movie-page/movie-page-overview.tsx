import {ReactElement} from 'react';
import {Film} from '../../types/film-type';

const ACTORS_COUNT_TO_SHOW = 4;

type MoviePageOverviewProps = {
  film: Film;
}

const enum RatingLevels {
  Bad = 0,
  Normal = 5,
  Good = 7,
  VeryGood = 8,
  Awesome = 10
}

function getRatingDescription(ratingValue : number) {
  if (ratingValue >= RatingLevels.Awesome) {
    return 'Awesome';
  } else if (ratingValue >= RatingLevels.VeryGood) {
    return 'Very good';
  } else if (ratingValue >= RatingLevels.Good) {
    return 'Good';
  } else if (ratingValue >= RatingLevels.Normal) {
    return 'Normal';
  }
  return 'Bad';
}

function MoviePageOverview({film} : MoviePageOverviewProps): ReactElement {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating.toString().replace('.', ',')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDescription(film.rating)}</span>
          <span className="film-rating__count">{film.ratingsCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.description.split('\n\n').map((text) => (
          <p key={crypto.randomUUID()}>{text}</p>
        ))}

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {
              film.starring.slice(0, ACTORS_COUNT_TO_SHOW + 1).map((name, index) =>
                index < ACTORS_COUNT_TO_SHOW
                  ? `${name}${index === ACTORS_COUNT_TO_SHOW - 1 ? ' ' : ', '}`
                  : 'and other')
            }
          </strong>
        </p>
      </div>
    </>
  );
}

export default MoviePageOverview;