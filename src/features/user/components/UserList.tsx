import type { User } from '../types/user';
import { UserCard } from './UserCard';

type Props = {
    users: User[];
};

export const UserList = ({ users }: Props) => {
    if (users.length === 0) {
        return <p className="text-gray-500">ユーザーが見つかりませんでした</p>;
    }

    return (
        <div>
            {users.map((user) => (
            <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};
