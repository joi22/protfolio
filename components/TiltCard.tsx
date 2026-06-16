'use client';
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const springValues = { damping: 25, stiffness: 120, mass: 1.2 };

export default function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        // Max tilt of 5 degrees
        const rotationX = (offsetY / (rect.height / 2)) * -5;
        const rotationY = (offsetX / (rect.width / 2)) * 5;

        rotateX.set(rotationX);
        rotateY.set(rotationY);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`perspective-midrange transform-3d ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
        >
            {children}
        </motion.div>
    );
}
