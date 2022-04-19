/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from 'Redux/Interfaces';

interface ICategoryState {
  categories: ICategory[];
}

const initialState: ICategoryState = {
  categories: []
};
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // Esto es una action
    setCategoryList: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    }
  }
});

export const { setCategoryList } = categorySlice.actions;

export default categorySlice;
