import Animation from "./Animations/Animation"
import { Link } from "@inertiajs/react"


const sections = [
    {header: "About us", items: ["Our mission", "What is musicaly?"], links: ["/mission", "/about"]},
    {header: "Legal", items: ["Terms of service", "Privacy policy"], links: ["/terms", "privacy"]},
    {header: "Contact us", items: ["Find our repo here", "Contact via email"], links: ["https://github.com/Anchiee/Musicaly", "wyhwtf@gmail.com"]},
]

export default function Footer() {
    return(
        <Animation>
            <footer className="bg-violet text-pastelpink py-7 flex items-start justify-center gap-30 text-[.85rem] fixed bottom-0 w-full">

                {sections.map((section, index) => (
                    <section key={index}>
                        <h2 className="uppercase font-semibold">{section.header}</h2>   
                        {
                            section.header == "Contact us" ? (
                                <>
                                    <a href={section.links[0]} className="block" target="_blank">{section.items[0]}</a>
                                    <a href={`mailto:${section.links[1]}`} target="_blank">{section.items[1]}</a>
                                </>
                            ) : (
                                <>
                                    <Link href={section.links[0]} className="block">{section.items[0]}</Link>
                                    <Link href={section.links[1]}>{section.items[1]}</Link>
                                </>
                            )
                        }
                    </section>
                ))}
            
            </footer>
        </Animation>
    )
}