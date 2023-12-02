import {createSlice} from '@reduxjs/toolkit';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {UserData} from '../../types/user-data';
import {AuthorizationStatus, NameSpace} from '../../routes';

type User = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
}

const initialState: User = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: null
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.fulfilled, (state, value) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = value.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, value) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = value.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
