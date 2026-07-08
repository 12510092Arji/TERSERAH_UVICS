import { motion } from "framer-motion";

function getVariants(direction) {
    const offset = 30;
    const initial = { opacity: 0 };

    if (direction === "up") initial.y = offset;
    if (direction === "down") initial.y = -offset;
    if (direction === "left") initial.x = offset;
    if (direction === "right") initial.x = -offset;

    return {
        hidden: initial,
        visible: { opacity: 1, x: 0, y: 0 },
    };
}

export function Scroll({ children, className, delay = 0, direction = "up", id }) {
    return (
        <motion.div
            id={id}
            className={className}
            variants={getVariants(direction)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
}