
type InputProps = {
    type: string,
    placeholder?: string,
    id: string,
}

export default function Input({type, placeholder, id} : InputProps) {
    return <input type={type} placeholder={placeholder} id={id} className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:outline-violet"/>
}