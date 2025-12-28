"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

    useEffect(() => {
        // Set window size after component mounts
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {/* 3D Shutter Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
                        exit={{
                            scaleY: 0,
                            transformOrigin: "top",
                        }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    />

                    {/* Content */}
                    <div className="relative z-10 text-center">
                        {/* Animated Logo/Text */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.2, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-[length:200%_auto] animate-gradient">
                                    MA
                                </span>
                            </h1>
                        </motion.div>

                        {/* Progress Bar */}
                        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>

                        {/* Percentage */}
                        <motion.p
                            className="mt-4 text-2xl font-bold text-white/70"
                            key={Math.floor(progress)}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                        >
                            {Math.floor(progress)}%
                        </motion.p>
                    </div>

                    {/* Animated Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white/20 rounded-full"
                                initial={{
                                    x: Math.random() * windowSize.width,
                                    y: Math.random() * windowSize.height,
                                    scale: Math.random() * 2,
                                }}
                                animate={{
                                    y: [null, Math.random() * windowSize.height],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
