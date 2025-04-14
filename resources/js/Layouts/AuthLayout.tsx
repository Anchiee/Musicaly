import { LayoutProps } from "@/types/layout"
import Header from "@/Components/Header"
import { Head } from "@inertiajs/react"


export default function AuthLayout({children, title} : LayoutProps) {
    return(
        <main className="size-full flex">

            <Head title={title}/>
            {children}

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