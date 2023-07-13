import { store } from '@/store';
import UserTable from './UserTable';

function SSRUserTable() {
  return (
    <div>
      <UserTable users={store.getState().search.startupUsers} />
    </div>
  );
}

export default SSRUserTable;
