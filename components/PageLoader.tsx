'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function PageLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 bg-bg-main z-[9999] flex flex-col items-center justify-center"
                    initial={{ y: 0 }}
                    exit={{ 
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
                    }}
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.h1 
                            className="text-3xl md:text-5xl font-bold tracking-widest text-text-light flex items-center gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <span>UZAIR</span>
                            <span className="text-accent">.</span>
                            <span className="text-xl md:text-2xl font-light text-slate-400">DEV</span>
                        </motion.h1>
                        <div className="w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden relative">
                            <motion.div 
                                className="absolute top-0 left-0 h-full bg-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                            />
                        </div>
                        <motion.p 
                            className="text-xs text-slate-500 tracking-widest uppercase mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Shopify & Full Stack Agency
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
