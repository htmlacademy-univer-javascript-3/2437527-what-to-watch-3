import {createSlice} from '@reduxjs/toolkit';
import {fetchFavoritesAction} from '../api-actions/api-actions';
import {FilmPreview} from '../../types/films/film-preview';
import {NameSpace} from '../namespace';

export type FavoritesState = {
  favorites: FilmPreview[];
  isLoaded: boolean;
  hasError: boolean;
}

const initialState: FavoritesState = {
  favorites: [],
  isLoaded: false,
  hasError: false
};

export const favorites = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isLoaded = false;
        state.hasError = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, value) => {
        state.isLoaded = true;
        state.favorites = value.payload;
        state.hasError = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isLoaded = false;
        state.hasError = true;
      });
  }
});
