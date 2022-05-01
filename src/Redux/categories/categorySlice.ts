/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from 'Redux/Interfaces';

interface ICategoryState {
  categoryList: ICategory[];
}

const initialState: ICategoryState = {
  categoryList: []
};
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // Esto es una action
    setCategoryList: (state, action: PayloadAction<ICategory[]>) => {
      state.categoryList = action.payload;
    }
  }
});

export const { setCategoryList } = categorySlice.actions;

export default categorySlice;
