import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {reviewPages} from './mocks/reviewPages';
import {video} from './mocks/video';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFilmsAction, fetchPromoFilmAction} from './store/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App
        reviews={reviewPages}
        videoPlayer={video}
      />
    </Provider>
  </React.StrictMode>
);
