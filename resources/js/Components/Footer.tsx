import Animation from "./Animations/Animation"

const sections = [
    {header: "About us", items: ["Our mission", "What is musicaly?"]},
    {header: "Legal", items: ["Terms of service", "Privacy policy"]},
    {header: "Contact us", items: ["Find our repo here", "Contact via email"]},
]

export default function Footer() {
    return(
        <Animation>
            <footer className="bg-violet text-pastelpink py-7 flex items-start justify-center gap-30 text-[.85rem]">

                {sections.map((section, index) => (
                    <section key={index}>
                        <h2 className="uppercase font-semibold">{section.header}</h2>   
                        <p>{section.items[0]}</p>
                        <p>{section.items[1]}</p>
                    </section>
                ))}
            
            </footer>
        </Animation>
    )
}