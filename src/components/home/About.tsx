"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="relative py-32 px-4 bg-background">
            <div className="container max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent-blue text-sm font-semibold uppercase tracking-wider">About Me</span>
                        <h2 className="text-5xl font-bold mt-4 mb-6">Software Engineering Student</h2>
                        <p className="text-lg text-foreground/70 mb-4">
                            5th-year engineering student specializing in Computer Science and Networks (MIAGE option).
                            Passionate about building innovative solutions through full-stack development, artificial intelligence, and data science.
                        </p>
                        <p className="text-lg text-foreground/70 mb-6">
                            Currently seeking an end-of-studies internship (PFE) for 2026. I have hands-on experience building
                            real-world applications with modern tech stacks including React, Node.js, Spring Boot, and AI integration.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/cv.pdf" download>
                                <MagneticButton className="px-6 py-3 rounded-full bg-accent-blue text-black font-medium hover:bg-accent-blue/90 transition-colors">
                                    Download CV
                                </MagneticButton>
                            </Link>
                            <Link href="mailto:mohamedamine.adnane@emsi-edu.ma">
                                <MagneticButton className="px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    Contact Me
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-full max-w-md mx-auto aspect-square">
                            <Image
                                src="/profile.jpg"
                                alt="Mohamed Amine ADNANE"
                                fill
                                className="rounded-3xl object-cover border border-white/10"
                            />
                            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4">
                                <p className="text-sm font-semibold">Available for Internship</p>
                                <p className="text-accent-blue text-2xl font-bold">2026</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
