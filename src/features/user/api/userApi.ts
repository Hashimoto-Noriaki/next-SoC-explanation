import { fetcher } from '@/shared/lib/fetcher';
import type { User } from '../types/user';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const userApi = {
    // 全ユーザー取得
    getAll:() => fetcher<User[]>(`${BASE_URL}/users`),
    
    // 特定ユーザー取得
    getById: (id: number) => fetcher<User>(`${BASE_URL}/users/${id}`),
}
