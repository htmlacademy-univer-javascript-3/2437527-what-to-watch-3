export const AppRoutes = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  NotFound: '*',
  Film: (id: number | string) => `/films/${id}`,
  Player: (id: number | string) => `/player/${id}`,
  AddReview: (id: number | string) => `/films/${id}/review`,
};
