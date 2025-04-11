import { Link } from "@inertiajs/react"

type InlineProps = {
    text: string,
    link: string,
    linkText: string,
}

export default function InlinePrompt({text, link, linkText} : InlineProps) {
    return <p className="text-[.8rem]">{text}<Link href={link} className="ml-1 text-violet font-semibold underline">{linkText}</Link></p>
}