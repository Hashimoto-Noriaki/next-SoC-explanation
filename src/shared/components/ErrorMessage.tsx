type Props = {
    message:string;
}

export const ErrorMessage = ({ message}: Props) => {
    return (
        <div className="text-red-500 p-5">
            <h2 className="text-xl font-bold">エラーが発生しました</h2>
            <p>{message}</p>
        </div>
    )
}
