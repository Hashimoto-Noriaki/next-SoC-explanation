type Props = {
    value: string;
    onChange: (value: string) => void;
};

export const UserSearchInput = ({ value, onChange }: Props) => {
    return (
        <input
            type="text"
            placeholder="ユーザー名で検索..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-3 text-base border border-gray-300 rounded"
        />
    );
};
