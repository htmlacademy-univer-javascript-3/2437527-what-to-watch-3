import {ReactElement} from 'react';
import {Film} from '../../types/film-type';
import {convertDate} from '../../helpers/convert-date';

type MoviePageReviewsProps = {
  film: Film;
}

function MoviePageReviews({film} : MoviePageReviewsProps): ReactElement {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          film.reviews.map((review) => (
            <div className="review" key={crypto.randomUUID()}>
              <blockquote className="review__quote">
                <p className="review__text">{review.text}
                </p>

                <footer className="review__details">
                  <cite className="review__author">{review.author}</cite>
                  <time className="review__date" dateTime={review.publicationDate}>
                    {convertDate(review.publicationDate)}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>))
        }

      </div>
    </div>
  );
}

export default MoviePageReviews;
