"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
}

export function BentoCard({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            ref={ref}
            whileHover={{ scale: 1.02, y: -4 }}
            className={cn(
                "row-span-1 rounded-2xl group/bento hover:shadow-2xl hover:shadow-accent-blue/20 transition-all duration-300 p-0 overflow-hidden flex flex-col glass border border-white/10",
                className
            )}
        >
            <div className="flex-1 flex flex-col">
                <div className="p-6 flex-1">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="text-accent-blue">{icon}</div>
                        <h3 className="font-bold text-xl leading-tight flex-1">
                            {title}
                        </h3>
                    </div>
                    <div className="text-foreground/70 text-sm leading-relaxed">
                        {description}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
