import { Head } from "@inertiajs/react";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";
import {usePage} from "@inertiajs/react";

type MainLayout = {
    title:string,
    children: React.ReactNode,
}

export default function MainLayout({title, children} : MainLayout) {

    const {url} = usePage()

    return(
        <>
            <Head title={title}/>
            <Nav/>
                <main className="px-3 flex flex-col grow-1">
                    {children}
                </main>
           
            {url === "/" &&
                <Footer/>            
            }
        </>
    )
}