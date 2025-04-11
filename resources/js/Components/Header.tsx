
type HeaderProps = {
    text: string,
    level?: 1 | 2 | 3 | 4 | 5 | 6,
}

export default function Header({text, level = 1} : HeaderProps) {
    const Tag : React.ElementType = `h${level}`
    return <Tag className="text-xl uppercase text-violet font-bold tracking-wider">{text}</Tag>
}