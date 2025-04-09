import MainLayout from "@/Layouts/MainLayout";

export default function Home() {

    return(
        <MainLayout title="Home">
            <section className="flex my-auto justify-center items-center gap-[40rem]">
                
                <div>
                    <h1 className="text-xl uppercase font-bold tracking-wider text-violet">Music That Moves You</h1>
                    <p className="max-w-md mt-2"> 
                        Whether it's the beat that lifts you up or the lyrics that understand you — Musicaly is built to bring you closer to the songs you love. It's more than streaming. It's connection.
                    </p>

                    <button 
                    className="mt-3 border-2 border-violet font-semibold cursor-pointer text-lg pl-7 pr-8 py-2 rounded-full text-violet 
                    hover:text-white hover:bg-violet transition-colors">
                        Try it
                    </button>
                
                </div>
               
                
                <img src="Musicaly3D.png" alt="Musicaly 3D render" className="size-80"/>
                    
            </section>
                
        </MainLayout>
    )
}