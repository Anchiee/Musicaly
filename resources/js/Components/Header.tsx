
type HeaderProps = {
    text: string,
}

export default function Header({text} : HeaderProps) {
    return <h1 className="text-xl uppercase text-violet font-bold tracking-wider">{text}</h1>
}