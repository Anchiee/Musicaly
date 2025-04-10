import { motion } from "motion/react"


const animations = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0},
}

type Animation = {
    children: React.ReactNode,
    element?: string
}


export default function Animation({children, element} : Animation) {
    if(element == "header") {
        return(
            <motion.header variants={animations} initial="initial" animate="animate" exit="exit">
                {children}
            </motion.header>
        )
    }

    return(
        <motion.footer variants={animations} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.footer>
    )
}