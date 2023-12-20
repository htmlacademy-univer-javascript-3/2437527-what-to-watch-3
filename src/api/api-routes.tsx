export const APIRoutes = {
  Main: '/',
  Films: '/films',
  Film: (id: number | string) => `/films/${id}`,
  SimilarFilms: (id: number | string) => `/films/${id}/similar`,
  Promo: '/promo',
  Reviews: (id: number | string) => `/comments/${id}`,
  Login: '/login',
  Logout: '/logout',
  Favorites: '/favorite',
  PostFavorite: (filmId: number | string, status: number | string) => `/favorite/${filmId}/${status}`
};
