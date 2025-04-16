import { useForm, router } from "@inertiajs/react";

export type FormFields = {
    name?: string,
    password?: string,
    confirm_password?: string,
    email?: string
}

export default function useAuth(formFields : FormFields) {
    const { data, setData, post, put } = useForm<FormFields>(formFields)

    const onChange = (e : React.ChangeEvent<HTMLInputElement>, formField : keyof FormFields) => {
        setData(formField, e.target.value)
    }

    return { onChange }
}
