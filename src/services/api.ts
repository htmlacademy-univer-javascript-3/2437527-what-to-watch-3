import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken} from './token';
import {StatusCodes} from 'http-status-codes';
import {toast} from 'react-toastify';
import browserHistory from '../browser-history';
import {AppRoute} from '../routes';
import {setErrorMessage} from '../store/action';
import {store} from '../store';

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

const BACKEND_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      const detailMessage = (error.response?.data);
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn(detailMessage.message);
      }
      if (error.response?.status === StatusCodes.NOT_FOUND) {
        browserHistory.push(AppRoute.NotFound);
      }
      if (error.response?.status === StatusCodes.BAD_REQUEST) {
        store.dispatch(setErrorMessage(detailMessage.message));
      }

      throw error;
    }
  );

  return api;
};
