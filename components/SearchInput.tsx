'use client';

import { useEffect } from 'react';
import { AppDispatch, RootState } from '@/store';
import { setSearch } from '@/store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import UserTable from './tables/UserTable';
import { User } from '@/lib/types/userTypes';
import { usersApi } from '@/store/userApi';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const startupUsers = useAppSelector((state) => state.search.startupUsers);
  const data = useAppSelector(
    (state) => state.usersApi.queries[`search("${search}")`]?.data as User[]
  );

  useEffect(() => {
    dispatch(usersApi.endpoints.search.initiate(search));
  }, [dispatch, search]);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <UserTable users={search.length ? data ?? [] : startupUsers} />
    </div>
  );
};

export default SearchInput;
