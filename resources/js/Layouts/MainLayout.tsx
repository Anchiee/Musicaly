import { Head } from "@inertiajs/react";
import Nav from "@/Components/Nav";

type MainLayout = {
    title:string,
    children?: React.ReactNode,
}

export default function MainLayout({title, children} : MainLayout) {
    return(
        <>
            <Head title={title}/>
            <Nav/>
            <main className="px-3">
                {children}
            </main>
        </>
    )
}