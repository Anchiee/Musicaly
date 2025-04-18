
type ButtonProps = {
    text:string,
    type: "submit" | "reset" | "button",
}

export default function SolidButton({text, type} : ButtonProps) {
    return <button type={type} className="bg-violet text-white py-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity w-full">{text}</button>
}