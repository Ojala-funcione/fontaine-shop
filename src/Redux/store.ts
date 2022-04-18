/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import { categorySlice } from './categories/categorySlice';
import { productSlice } from './products/productSlice';
import { userSlice } from './users/userSlice';

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    categories: categorySlice.reducer,
    user: userSlice.reducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
