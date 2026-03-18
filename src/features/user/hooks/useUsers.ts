import { useEffect, useState } from 'react';
import { userApi } from '../api/userApi';
import type { User } from '../types/user';

export const useUsers = () => {
    const [users,setUsers] = useState<User[]>([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState<string | null>(null)

    useEffect(()=> {
        const loadUsers = async() => {
            try {
                setLoading(true)
                const data = await userApi.getAll();
                setUsers(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : '不明なエラー');
            } finally {
                setLoading(false);
            }
        };
        loadUsers();
    },[])

    return {  users, loading, error  };
};
