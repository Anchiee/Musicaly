import Input from "@/Components/Input"
import InlinePrompt from "@/Components/InlinePrompt"
import SolidButton from "@/Components/SolidButton"
import AuthLayout from "@/Layouts/AuthLayout"
import useAuth, { FormFields } from "@/Hooks/useAuth"
import Notification from "@/Components/Notification"
import Socials from "@/Components/Socials"


export default function sign() {
    
    const { onChange, onSubmit, errors } = useAuth({
        "name": "",
        "password": "",
        "password_confirmation": "",
        "email": "",
    })


    return(
        <AuthLayout title="Sign-up">
            
            <section className="w-full max-w-md mx-auto flex flex-col items-center py-10 gap-6 self-center">
                <div>
                    <Socials/>
                    <form onSubmit={(e) => onSubmit(e, "post", route("registered.store"))}>
                        {
                            [
                                {label: "Username", placeholder: "John", id: "username", type: "text", changeLabel: "name", error: errors.name},
                                {label: "Password", placeholder: "", id: "password", type: "password", changeLabel: "password", error: errors.password},
                                {label: "Confirm password", placeholder: "", id: "confirm_password", type: "password", changeLabel: "password_confirmation", 
                                    error: errors.password_confirmation},
                                {label: "Email", placeholder: "John@example.com", id: "email", type: "email", changeLabel: "email", error: errors.email},
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
                            <InlinePrompt text="Already have an account?" link="/login" linkText="Log-in"/>
                            <InlinePrompt text="Forgot password?" link="adas" linkText="Reset it"/>
                        </div>

                        <SolidButton text="Sign-up" type="submit"/>
                    </form>
                </div>
            </section>
        </AuthLayout>
    )
}