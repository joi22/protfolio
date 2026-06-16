'use client';
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorFollower() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 180, mass: 0.6 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
        if (isTouchDevice) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 size-8 border border-accent/50 rounded-full pointer-events-none z-50 flex items-center justify-center mix-blend-screen"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            <div className="size-1.5 bg-accent rounded-full" />
        </motion.div>
    );
}
