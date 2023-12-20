import {RatingLevels} from '../const/rating-levels';

export function getRatingDescription(ratingValue : number) {
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
