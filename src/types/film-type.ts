import {Review} from './review';

export type Film = {
  id: number;
  src: string;
  title: string;
  genre: string;
  releaseYear: number;
  durationInMinutes: number;
  description: string;
  rating: number;
  ratingsCount: number;
  director: string;
  starring: string[];
  reviews: Review[];
};

export type PromoFilm = {
  title: string;
  genre: string;
  year: string;
  imgSrc: string;
  bgImgSrc: string;
};
