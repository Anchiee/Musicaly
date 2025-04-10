import { motion } from "motion/react"

type AnimatedPage = {
    children: React.ReactNode,
    className?: string,
}

const animations = {
    initial: {x: -20, opacity: 0},
    animate: {x: 0, opacity: 1},
    exit: {x: -20, opacity: 0},
    transition: {
        duration: 0.5,
        ease: "easeInOut", 
    }
}

export default function AnimatedPage({children, className} : AnimatedPage) {
    return(
        <motion.section variants={animations} initial="initial" animate="animate" exit="exit" transition={animations.transition} className={className}>
            {children}
        </motion.section>
    )
}