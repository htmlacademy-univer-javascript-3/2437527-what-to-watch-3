export const AppRoutes = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: (id: number | string) => `/films/${id}`,
  Player: (id: number | string) => `/player/${id}`,
  AddReview: (id: number | string) => `/films/${id}/review`,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const APIRoute = {
  Films: '/films',
  Film: (id: number | string) => `/films/${id}`,
  SimilarFilms: (id: number | string) => `/films/${id}/similar`,
  Promo: '/promo',
  Reviews: (id: number | string) => `/comments/${id}`,
  Login: '/login',
  Logout: '/logout',
};
