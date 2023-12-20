import {ReactElement} from 'react';
import {Film} from '../../types/films/film';
import {RatingLevels} from '../../const/rating-levels';

type MoviePageOverviewProps = {
  film: Film;
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
          <span className="film-rating__count">{film.scoresCount} ratings</span>
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
              film.starring.map((name, index) =>
                `${name}${index < film.starring.length - 1 ? ', ' : ' '}`)
            }
          </strong>
        </p>
      </div>
    </>
  );
}

export default MoviePageOverview;
