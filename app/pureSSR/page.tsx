import SSRUserTable from '@/components/tables/SSRUserTable';
// import UserTable from '@/components/tables/UserTable';
import { store } from '@/store';
import { setStartupUsers } from '@/store/userSlice';

export default async function PureSSRPage() {
  const request = await fetch('http://localhost:3000/api/search');
  const data = await request.json();
  store.dispatch(setStartupUsers(data));
  return (
    <main>
      <h1>PureSSRPage</h1>
      <SSRUserTable />
    </main>
  );
}
