import Providers from '@/components/Provider';
import SearchInput from '@/components/SearchInput';
import SSRUserTable from '@/components/tables/SSRUserTable';
import UserTable from '@/components/tables/UserTable';
import { store } from '@/store';
import { setStartupUsers } from '@/store/userSlice';

export default async function DashboardTwoPage() {
  const request = await fetch('http://localhost:3000/api/search');
  const data = await request.json();
  store.dispatch(setStartupUsers(data));
  return (
    <main>
      <h1>Dashboard Two Page</h1>
      {/* <SSRUserTable users={data} /> */}
      <Providers>
        <SearchInput />
      </Providers>
    </main>
  );
}
