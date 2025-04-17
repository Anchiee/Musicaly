import { useForm, router, usePage } from "@inertiajs/react";
import { FormEvent } from "react";

export type FormFields = {
    name?: string,
    password?: string,
    password_confirmation?: string,
    email?: string
}

export default function useAuth(formFields : FormFields) {
    const { errors } = usePage().props

    const { setData, data } = useForm<FormFields>(formFields)

    const onChange = (e : React.ChangeEvent<HTMLInputElement>, formField : keyof FormFields) => {
        setData(formField, e.target.value)
    }

    const onSubmit = (e: FormEvent, requestType : "post" | "put" | "delete", destination : string) => {
        e.preventDefault()
        request(requestType, destination)
    }

    const request = (type : "post" | "put" | "delete", destination: string) => {
        switch(type) {
            case "post":
                return router.post(destination, data)
            case "put":
                return router.put(destination, data)
            case "delete":
                return router.delete(destination)
        }
    }

    return { onChange, onSubmit, errors }
}
