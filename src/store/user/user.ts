import {createSlice} from '@reduxjs/toolkit';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions/api-actions';
import {User} from '../../types/user/user';
import {NameSpace} from '../namespace';
import {AuthorizationStatus} from '../../const/authorization-status';

type UserData = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
}

const initialState: UserData = {
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
      })
      .addCase(logoutAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
