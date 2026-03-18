import type { User } from '../types/user';

type Props = {
    user: User;
};

export const UserCard = ({ user }: Props) => {
    return (
        <div className="border border-gray-200 rounded-lg p-4 mb-3 bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
            <p className="text-gray-600 mb-1">📧 {user.email}</p>
            <p className="text-gray-600 mb-1">🏢 {user.company.name}</p>
            <p className="text-gray-600">📍 {user.address.city}</p>
        </div>
    );
};
