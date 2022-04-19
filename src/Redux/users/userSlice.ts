/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'Redux/Interfaces';

const initialState: { user: IUser | null } = {
  user: null
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;

export default userSlice;
