import {createSlice} from '@reduxjs/toolkit';
import {fetchFavoritesAction} from '../api-actions/api-actions';
import {FilmPreview} from '../../types/films/film-preview';
import {NameSpace} from '../namespace';

type Favorites = {
  favorites: { favorites: FilmPreview[] } & { isLoaded: boolean };
}

const initialState: Favorites = {
  favorites: { favorites: [], isLoaded: false },
};

export const favorites = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, value) => {
        state.favorites = value.payload;
      });
  }
});
