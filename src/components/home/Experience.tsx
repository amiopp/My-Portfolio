"use client";

import { motion } from "framer-motion";

export default function Experience() {
    const timeline = [
        {
            date: "2023 - 2026",
            title: "Engineering Degree - Computer Science & Networks",
            company: "EMSI - École Marocaine des Sciences de l'Ingénieur",
            description: "Specialization: MIAGE (Business Computer Science Methods)",
            details: "Key Courses: DevOps, ERP, Big Data, Machine Learning & Deep Learning, Data Mining, Multi-platform Development, Object-Oriented Programming",
        },
        {
            date: "August - October 2025",
            title: "Full-Stack Developer Intern",
            company: "Vigon systèmes - Marrakech",
            description: "Developed centralized IT monitoring platform for hotel infrastructure with AI-powered predictive analysis and real-time alerting system.",
            details: "Stack: React, TypeScript, Node.js, PostgreSQL, WebSocket",
        },
        {
            date: "July 2024",
            title: "Full-Stack Developer Intern",
            company: "RamSys - Marrakech",
            description: "Built comprehensive IT asset management application with complete traceability and automated inventory tracking system.",
            details: "Stack: React.js, Node.js, Express, MongoDB",
        },
        {
            date: "2021 - 2023",
            title: "Preparatory Cycle",
            company: "EMSI - École Marocaine des Sciences de l'Ingénieur",
            description: "Intensive scientific training in mathematics, physics, computer science, and engineering fundamentals preparing for the engineering cycle.",
            details: "",
        },
    ];

    return (
        <section id="experience" className="relative py-32 px-4 bg-background">
            <div className="container max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-blue text-sm font-semibold uppercase tracking-wider">Background</span>
                    <h2 className="text-5xl font-bold mt-4">Education & Experience</h2>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/10"></div>
                    {timeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-12 group"
                        >
                            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-accent-blue border-4 border-background group-hover:scale-125 transition-transform"></div>
                            <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
                                <span className="inline-block px-3 py-1 bg-white/5 rounded-lg text-sm text-accent-purple mb-3">
                                    {item.date}
                                </span>
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-accent-blue font-semibold mb-3">{item.company}</p>
                                <p className="text-foreground/70 mb-2">{item.description}</p>
                                {item.details && <p className="text-sm text-foreground/50">{item.details}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
