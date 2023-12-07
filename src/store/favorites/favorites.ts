import {createSlice} from '@reduxjs/toolkit';
import {fetchFavoritesAction} from '../api-actions';
import {NameSpace} from '../../routes';
import {FilmPreview} from '../../types/film-type';

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
