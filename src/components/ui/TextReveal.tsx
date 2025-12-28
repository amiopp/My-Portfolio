"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
    const letters = children.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.span
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
}

interface WordRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export function WordReveal({ children, className = "", delay = 0 }: WordRevealProps) {
    const words = children.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: delay },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.span
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span key={index} variants={child} className="inline-block mr-2">
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}
