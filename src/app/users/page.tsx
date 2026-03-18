'use client';

import { 
    useUsers, 
    useUserSearch, 
    UserSearchInput, 
    UserList
} from '@/features/user';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { ErrorMessage } from '@/shared/components/ErrorMessage';

export default function UsersPage() {
    const { users, loading, error } = useUsers();
    const { searchTerm, setSearchTerm, filteredUsers } = useUserSearch(users);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="p-5 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-5">ユーザー一覧</h1>

            <div className="mb-5">
            <UserSearchInput value={searchTerm} onChange={setSearchTerm} />
            </div>

            <UserList users={filteredUsers} />
        </div>
    );
}
