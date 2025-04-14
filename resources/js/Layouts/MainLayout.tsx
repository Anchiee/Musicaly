import { Head } from "@inertiajs/react";
import Nav from "@/Components/Nav";
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
                    {children}
                </main>
           
            {(url === "/" || url === "/terms" || url == "/privacy") &&
                <Footer/>            
            }
        </>
    )
}