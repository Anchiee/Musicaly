import Input from "@/Components/Input"
import InlinePrompt from "@/Components/InlinePrompt"
import SolidButton from "@/Components/SolidButton"
import AuthLayout from "@/Layouts/AuthLayout"
import useAuth from "@/Hooks/useAuth"
import { FormFields } from "@/Hooks/useAuth"
import { useEffect } from "react"

export default function login() {
    
    const { onChange } = useAuth({
        "name": "",
        "password": "",
    })

    return(
        <AuthLayout title="Sign-up">
            
            <section className="w-full max-w-md mx-auto flex flex-col items-center py-10 gap-6 self-center">
                <form className="flex flex-col gap-6">

                    {
                        [
                            {label: "Username", placeholder: "John", id: "username", type: "text", changeLabel: "name"},
                            {label: "Password", placeholder: "", id: "password", type: "password", changeLabel: "password"},
                        ].map(inputSection => (

                            <div key={inputSection.id}>
                              <label htmlFor={inputSection.id}>{inputSection.label}</label>
                              <Input type={inputSection.type} id={inputSection.id} placeholder={inputSection.placeholder} 
                              onChange={(e) => onChange(e, inputSection.changeLabel as keyof FormFields)}/>  
                            </div>
                        
                        ))
                    }

                    <div className="flex flex-col gap-2">
                        <InlinePrompt text="New to musicaly?" link="/sign" linkText="Sign-up"/>
                        <InlinePrompt text="Forgot password?" link="adas" linkText="Reset it"/>
                    </div>

                    <SolidButton text="Sign-up" type="button"/>
                    
                </form>
            </section>
        </AuthLayout>
    )
}