import Animation from "./Animations/Animation"
import { Link } from "@inertiajs/react"

export default function Nav() {
    return (
        <Animation element="header">
            <header className="flex items-center bg-violet w-full px-3 justify-between h-20 fixed top-0">
                <Link href="/">
                    <img src="Musicaly.png" alt="Musicaly logo" className="size-28"/>
                </Link>

                <nav className="flex items-center text-[.8rem] gap-6 text-pastelpink font-bold" >
                    <Link href="/terms">Terms of Service</Link>
                    <Link href="/privacy">Privacy policy</Link>
                    <p>Contact</p>

                    <button className="px-6 py-3 bg-white text-black rounded-3xl">Sign-in</button>
                </nav>

            </header>

        </Animation>

    )
}