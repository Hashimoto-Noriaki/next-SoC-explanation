'use client'

import { useState, useEffect } from 'react'

export default function UsersPage(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // API通信
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if(!response.ok) throw new Error('Failed to fetch')
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [])

    // フィルタリング処理
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // ローディング表示
    if(loading){
        return(
            <div className="text-center py-12">
                <div className="text-2xl">読み込み中...</div>
            </div>
        )
    }

    //エラー表示
    if(error){
        return(
            <div className="text-red-500 p-5">
                <h2 className="text-xl font-bold">エラーが発生しました</h2>
                <p>{error}</p>
            </div>
        )
    }

    return(
        <div className="p-5 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-5">ユーザー一覧</h1>

            <div className="mb-5">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="ユーザー名で検索..."
                    className="w-full p-3 text-base border border-gray-300 rounded-md"
                />
            </div>
            
            <div>
                {filteredUsers.lenght === 0 ?(
                    <p className="text-gray-500">ユーザーが見つかりませんでした</p>
                ):(
                    filteredUsers.map((user)=> (
                        <div
                            key={user.id}
                            className="border border-gray-200 rounded-lg p-4 mb-3 bg-gray-50"
                        >
                            <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
                            <p className="text-gray-600 mb-1">📧 {user.email}</p>
                            <p className="text-gray-600 mb-1">🏢 {user.company.name}</p>
                            <p className="text-gray-600">📍 {user.address.city}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
