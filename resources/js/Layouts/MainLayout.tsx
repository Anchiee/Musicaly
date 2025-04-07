import { Head } from "@inertiajs/react";


type MainLayout = {
    title:string,
    children: React.ReactNode,
}

export default function MainLayout({title, children} : MainLayout) {
    return(
        <>
            <Head title={title}/>
            <main>
                {children}
            </main>
        </>
    )
}