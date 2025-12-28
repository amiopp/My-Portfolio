"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function FluidCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cursorTrail = useRef<{ x: number; y: number; life: number }[]>([]);
    const animationFrameId = useRef<number>();

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Add trail point
            cursorTrail.current.push({
                x: e.clientX,
                y: e.clientY,
                life: 1,
            });

            // Limit trail length
            if (cursorTrail.current.length > 20) {
                cursorTrail.current.shift();
            }

            // Check if hovering over clickable element
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") !== null ||
                target.closest("button") !== null;
            setIsPointer(isClickable);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    // Canvas trail animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw trail
            cursorTrail.current = cursorTrail.current.filter((point) => {
                point.life -= 0.05;
                return point.life > 0;
            });

            cursorTrail.current.forEach((point, index) => {
                const radius = 20 * point.life;
                const opacity = point.life * 0.3;

                // Create gradient
                const gradient = ctx.createRadialGradient(
                    point.x, point.y, 0,
                    point.x, point.y, radius
                );

                gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(168, 85, 247, ${opacity * 0.5})`);
                gradient.addColorStop(1, "rgba(99, 102, 241, 0)");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <>
            {/* Canvas for trail effect */}
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{ mixBlendMode: "screen" }}
            />

            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                    scale: isPointer ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            >
                <div
                    className="w-6 h-6 rounded-full border-2 border-white/50 backdrop-blur-sm"
                    style={{
                        background: isPointer
                            ? "rgba(99, 102, 241, 0.3)"
                            : "rgba(255, 255, 255, 0.1)",
                    }}
                />
            </motion.div>

            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isPointer ? 0.8 : 1,
                    opacity: isPointer ? 0.3 : 0.2,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
            >
                <div className="w-10 h-10 rounded-full border border-white/30" />
            </motion.div>
        </>
    );
}
