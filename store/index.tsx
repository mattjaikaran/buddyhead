import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './userSlice';
import { usersApi } from './userApi';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    usersApi: usersApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(usersApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
