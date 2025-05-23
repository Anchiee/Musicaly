import { Head } from "@inertiajs/react";
import Nav from "@/Components/Nav";
import AnimatedPage from "@/Components/Animations/AnimatedPage";
import Footer from "@/Components/Footer";
import {usePage} from "@inertiajs/react";
import { LayoutProps } from "@/types/layout";


export default function MainLayout({title, children} : LayoutProps) {

    const {url} = usePage()

    return(
        <>
            <Head title={title}/>
            <Nav/>
                <main className="px-3 flex flex-col grow-1">
                    <AnimatedPage className="h-full">
                        {children}
                    </AnimatedPage>  
                </main>
           
            {(url != "/login" && url != "/sign") &&
                <Footer/>            
            }
        </>
    )
}