import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/lib/types/userTypes';

export interface SearchUserState {
  search: string;
  startupUsers: User[];
}

const initialState: SearchUserState = {
  search: '',
  startupUsers: [],
};

const searchUserSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStartupUsers: (state, action: PayloadAction<User[]>) => {
      state.startupUsers = action.payload;
    },
  },
});

export const { setSearch, setStartupUsers } = searchUserSlice.actions;
export default searchUserSlice.reducer;
