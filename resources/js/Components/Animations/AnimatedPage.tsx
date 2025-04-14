import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"
import { usePage } from "@inertiajs/react"

type AnimatedPage = {
    children: React.ReactNode,
    className?: string,
}

const animations = {
    initial: {x: -20, opacity: 0},
    animate: {x: 0, opacity: 1},
    exit: {x: -20, opacity: 0, duration: .2},
    transition: {
        duration: 0.5,
        ease: "easeInOut", 
    }
}

export default function AnimatedPage({children, className} : AnimatedPage) {

    const {url} = usePage()

    return(
        <AnimatePresence mode="wait"> 
            <motion.section variants={animations} initial="initial" animate="animate" exit="exit" transition={animations.transition} key={url} className={className}>
                {children}
            </motion.section>
        </AnimatePresence>
    )
}