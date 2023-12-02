import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../routes';

export const ALL_GENRES_RUBRIC = 'All genres';

export type Data = {
  genre: string;
  errorMessage: string | undefined;
};

const initialState : Data = {
  genre: ALL_GENRES_RUBRIC,
  errorMessage: undefined
};

export const data = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setGenre: (state, value: string) => {
      state.genre = value.payload.genre as string;
    },
    setErrorMessage: (state, value) => {
      state.errorMessage = value.payload as string;
    }
  }
});

export const {setGenre, setErrorMessage} = data.actions;
