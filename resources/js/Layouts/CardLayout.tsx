import { LayoutProps } from "@/types/layout";
import { Head } from "@inertiajs/react";
import AnimatedPage from "@/Components/Animations/AnimatedPage";



export default function CardLayout({title, children} : LayoutProps) {
    return(
        <>
            <Head title={title}/>
            <main className="size-full bg-violet flex justify-center items-center">
                <AnimatedPage className="bg-white rounded-md px-10 py-3 shadow-md">
                    <img src="/Musicaly2.png" alt="Musicaly logo" className="size-36 mx-auto"/>
                    {children}

                    <p className="text-[.9rem] mt-5">© {new Date().getFullYear()} Musicaly — Open Source under MIT License</p>
                </AnimatedPage>  

                

            </main>

        </>
    )
}