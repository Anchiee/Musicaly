


export default function Nav() {
    return (
        <header className=" flex items-center bg-violet w-full px-3 justify-between h-20">
            <img src="Musicaly.png" alt="Musicaly logo" className="size-28"/>

            <nav className="flex items-center text-[.8rem] gap-6 text-pastelpink font-bold" >
                <p>Terms of Service</p>
                <p>Privacy policy</p>
                <p>Contact</p>

                <button className="px-6 py-3 bg-white text-black rounded-3xl">Sign-in</button>
            </nav>

        </header>
    )
}