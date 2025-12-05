"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                >
                    <span className="text-sm text-accent-blue font-medium">Available for internship in 2026</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-6"
                >
                    Hi, I'm
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-[length:200%_auto] animate-gradient">
                        Mohamed Amine
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-foreground/80 mb-3 font-medium"
                >
                    Software Engineering Student | Data Science & AI Enthusiast
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto"
                >
                    5th-year engineering student specializing in Computer Science and Networks.
                    Passionate about building innovative solutions through AI, full-stack development, and data science.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-center gap-4 flex-wrap"
                >
                    <Link href="#work">
                        <MagneticButton className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium hover:shadow-lg hover:shadow-accent-blue/50 transition-all">
                            View My Work
                        </MagneticButton>
                    </Link>
                    <Link href="/cv.pdf" download>
                        <MagneticButton className="px-8 py-3 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            Download CV
                        </MagneticButton>
                    </Link>
                </motion.div>
            </div>

            {/* Tech Stack Marquee */}
            <div className="absolute bottom-0 left-0 w-full py-6 border-t border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
                <div className="flex gap-12 text-xl font-bold text-white/20 whitespace-nowrap animate-marquee">
                    <span>REACT</span>
                    <span>NEXT.JS</span>
                    <span>TYPESCRIPT</span>
                    <span>TAILWIND</span>
                    <span>SPRING BOOT</span>
                    <span>NODE.JS</span>
                    <span>POSTGRESQL</span>
                    <span>PYTHON</span>
                    <span>DOCKER</span>
                    <span>KUBERNETES</span>
                    <span>REACT</span>
                    <span>NEXT.JS</span>
                    <span>TYPESCRIPT</span>
                    <span>TAILWIND</span>
                    <span>SPRING BOOT</span>
                    <span>NODE.JS</span>
                </div>
            </div>
        </section>
    );
}
