import { useMemo, useState } from 'react';
import type { User } from '../types/user';

export const useUserSearch = (users: User[]) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = useMemo(() => {
        if (!searchTerm) return users;

        return users.filter((user) => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    },[users, searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        filteredUsers,
    };
}
