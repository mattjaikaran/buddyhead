'use client';
import { useRef } from 'react';
import { store } from '@/store';
import { User } from '@/lib/types/userTypes';
import { setStartupUsers } from '@/store/userSlice';

const Preloader = ({ users }: { users: User[] }) => {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setStartupUsers(users));
    loaded.current = true;
  }
  return null;
};

export default Preloader;
