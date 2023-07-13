import Preloader from '@/components/Preloader';
import Providers from '@/components/Provider';
import SearchInput from '@/components/SearchInput';

import { store } from '@/store';
import { setStartupUsers } from '@/store/userSlice';

export default async function Home() {
  const request = await fetch('http://localhost:3000/api/search');
  const data = await request.json();
  store.dispatch(setStartupUsers(data));
  return (
    <main>
      <h1>what up</h1>
      <Preloader users={data} />
      <Providers>
        <SearchInput />
      </Providers>
    </main>
  );
}
