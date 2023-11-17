import {ReactElement} from 'react';
import {convertDate} from '../../helpers/convert-date';
import {Review} from '../../types/review';

type MoviePageReviewsProps = {
  reviews: Review[];
}

function MoviePageReviews({reviews} : MoviePageReviewsProps): ReactElement {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map((review) => (
            <div className="review" key={crypto.randomUUID()}>
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}
                </p>

                <footer className="review__details">
                  <cite className="review__author">{review.user}</cite>
                  <time className="review__date" dateTime={review.date}>
                    {convertDate(review.date)}
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
