"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, User, Briefcase, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Dock() {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 flex h-16 items-end gap-4 rounded-2xl bg-white/10 px-4 pb-3 backdrop-blur-md border border-white/10 z-50"
        >
            <DockIcon mouseX={mouseX} icon={<Home />} label="Home" href="#home" />
            <DockIcon mouseX={mouseX} icon={<User />} label="About" href="#about" />
            <DockIcon mouseX={mouseX} icon={<Briefcase />} label="Work" href="#work" />
            <DockIcon mouseX={mouseX} icon={<Mail />} label="Contact" href="mailto:mohamedamine.adnane@emsi-edu.ma" />
            <div className="w-px h-8 bg-white/20 my-auto mx-2" />
            <DockIcon mouseX={mouseX} icon={<Github />} label="GitHub" href="https://github.com/amiopp" />
            <DockIcon mouseX={mouseX} icon={<Linkedin />} label="LinkedIn" href="https://www.linkedin.com/in/mohamed-amine-adnane-57097038a/" />
        </motion.div>
    );
}

function DockIcon({
    mouseX,
    icon,
    label,
    href,
}: {
    mouseX: any;
    icon: React.ReactNode;
    label: string;
    href: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                style={{ width }}
                className="aspect-square rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors relative group"
            >
                <span className="text-white">{icon}</span>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {label}
                </span>
            </motion.div>
        </Link>
    );
}
