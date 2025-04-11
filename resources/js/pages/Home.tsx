import MainLayout from "@/Layouts/MainLayout";
import AnimatedPage from "@/Components/Animations/AnimatedPage";
import Header from "@/Components/Header";

export default function Home() {

    return(
        <MainLayout title="Home">
            <AnimatedPage className="h-full">
                <section className="flex my-auto justify-center items-center gap-[40rem] h-full">
                    
                    <div>
                        <Header text="Music That Moves you"/>
                        <p className="max-w-md mt-2"> 
                            Whether it's the beat that lifts you up or the lyrics that understand you - Musicaly is built to bring you closer to the songs you love. It's more than streaming. It's connection.
                        </p>

                        <button 
                        className="mt-3 border-2 border-violet font-semibold cursor-pointer text-lg pl-7 pr-8 py-2 rounded-full text-violet 
                        hover:text-white hover:bg-violet transition-colors">
                            Try it
                        </button>
                    
                    </div>
                
                    
                    <img src="Musicaly3D.png" alt="Musicaly 3D render" className="size-80"/>
                        
                </section>
            </AnimatedPage>
                
        </MainLayout>
    )
}