import Header from "@/Components/Header"
import Input from "@/Components/Input"
import InlinePrompt from "@/Components/InlinePrompt"
import SolidButton from "@/Components/SolidButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"


export default function login() {
    return(
        <main className="size-full flex">
            <section className="w-1/4 flex flex-col items-center py-10 gap-6">
                <Header text="sign-up"/>
                <section className="flex gap-24 mt-4">
                        <FontAwesomeIcon icon={faDiscord} size="lg" className="text-violet"/>
                        <FontAwesomeIcon icon={faGithub} size="lg" className="text-violet"/>
                </section>
                

                <section className="mt-15 flex flex-col gap-6">
                    <div>    
                        <label htmlFor="username">Username</label>
                        <Input type="text" placeholder="John" id="username"/>
                    </div>

                    <div>    
                        <label htmlFor="password">Password</label>
                        <Input type="password" id="password"/>
                    </div>


                    <div>    
                        <label htmlFor="confirm_password">Confirm password</label>
                        <Input type="password" id="confirm_password"/>
                    </div>

                    <div>    
                        <label htmlFor="email">Email</label>
                        <Input type="password" id="email" placeholder="John@example.com"/>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <InlinePrompt text="Already have an account?" link="adas" linkText="Log-in"/>
                        <InlinePrompt text="Forgot password?" link="adas" linkText="Reset it"/>
                    </div>

                    <SolidButton text="Sign-up" type="button"/>
                    
                </section>

            </section>

            <section className="bg-violet w-full">
                
                <div className="flex justify-center items-center h-full">

                    <div className="bg-white px-5 py-10 rounded-md shadow-xl">
                        <img src="Musicaly2.png" alt="Musicaly logo" className="size-50 mx-auto"/>
                        <Header text="Dive into a world of music"/>
                        <p className="text-[.9rem]"> No ads, no limits - just pure, high-quality sound. Stream your favorite songs anytime, anywhere.</p>

                        <div className="my-3 py-3 border-t-[1px] border-b-[1px] border-gray-200">
                            <Header text="we offer" level={2}/>
                            <ul className="text-[.9rem]">
                                <li className="my-1">Unlimited skips</li>
                                <li className="my-1">High-fidelity audio</li>
                                <li className="my-1">Personalized playlists</li>
                            </ul>
                        </div>
                        
                        <p className="text-[.9rem] mt-5">© {new Date().getFullYear()} Musicaly — Open Source under MIT License</p>

                    </div>

                </div>
                
            </section>
        </main>
    )
}