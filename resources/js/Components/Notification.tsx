
type NotificationProps = {
    message: string
}

export default function Notification({message} : NotificationProps) {
    return <p className="text-xs text-red-800">{message}</p>
}