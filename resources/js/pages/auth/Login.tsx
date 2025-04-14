import Input from "@/Components/Input"
import InlinePrompt from "@/Components/InlinePrompt"
import SolidButton from "@/Components/SolidButton"
import AuthLayout from "@/Layouts/AuthLayout"



export default function login() {
    return(
        <AuthLayout title="Sign-up">
            
            <section className="w-full max-w-md mx-auto flex flex-col items-center py-10 gap-6 self-center">
                <section className="flex flex-col gap-6">

                    {
                        [
                            {label: "Username", placeholder: "John", id: "username", type: "text"},
                            {label: "Password", placeholder: "", id: "password", type: "password"},
                            {label: "Confirm password", placeholder: "", id: "confirm_password", type: "password"},
                            {label: "Email", placeholder: "John@example.com", id: "email", type: "email"},
                        ].map(inputSection => (

                            <div key={inputSection.id}>
                              <label htmlFor={inputSection.id}>{inputSection.label}</label>
                              <Input type={inputSection.type} id={inputSection.id} placeholder={inputSection.placeholder}/>  
                            </div>
                        
                        ))
                    }

                    <div className="flex flex-col gap-2">
                        <InlinePrompt text="Already have an account?" link="adas" linkText="Log-in"/>
                        <InlinePrompt text="Forgot password?" link="adas" linkText="Reset it"/>
                    </div>

                    <SolidButton text="Sign-up" type="button"/>
                    
                </section>
            </section>
        </AuthLayout>
    )
}