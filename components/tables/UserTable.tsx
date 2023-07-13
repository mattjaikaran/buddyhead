import { User } from '@/lib/types/userTypes'

const UserTable = ({ users }: { users: User[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.name}>
            <td>{user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
