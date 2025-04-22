import Input from "@/Components/Input"
import InlinePrompt from "@/Components/InlinePrompt"
import SolidButton from "@/Components/SolidButton"
import AuthLayout from "@/Layouts/AuthLayout"
import useAuth from "@/Hooks/useAuth"
import { FormFields } from "@/Hooks/useAuth"
import { usePage } from "@inertiajs/react"
import Notification from "@/Components/Notification"
import Socials from "@/Components/Socials"
import { usePageProps } from "@/types/inertiaHooks"

export default function Login() {

    const { canResetPassword, status } = usePage<usePageProps>().props
    
    const { onChange, onSubmit, errors } = useAuth({
        "name": "",
        "password": "",
    })

    return(
        <AuthLayout title="Sign-up">
            
            <section className="w-full max-w-md mx-auto flex flex-col items-center py-10 gap-6 self-center">
                <div>
                    <Socials/>
                    <form onSubmit={(e) => onSubmit(e, "post", route("session.store"))}>
                        {
                            [
                                {label: "Email", placeholder: "John@example.com", id: "email", type: "email", changeLabel: "email", error: errors.email},
                                {label: "Password", placeholder: "", id: "password", type: "password", changeLabel: "password", error: errors.password},
                            ].map(inputSection => (

                                <div key={inputSection.id} className="my-4">
                                    <label htmlFor={inputSection.id}>{inputSection.label}</label>
                                    <Input type={inputSection.type} id={inputSection.id} placeholder={inputSection.placeholder} 
                                    onChange={(e) => onChange(e, inputSection.changeLabel as keyof FormFields)}/>  
                                    {inputSection.error && <Notification message={inputSection.error}/>}
                                </div>
                            
                            ))
                        }
                        <div className="flex flex-col gap-2 my-4">
                            <InlinePrompt text="New to musicaly?" link="/sign" linkText="Sign up"/>
                            {canResetPassword && <InlinePrompt text="Forgot password?" link="adas" linkText="Reset it"/>}
                        </div>
                    
                        {status && <p>{status}</p>}
                        <SolidButton text="Sign in" type="submit"/>
                    </form>

                    
                    
                </div>
            </section>
        </AuthLayout>
    )
}