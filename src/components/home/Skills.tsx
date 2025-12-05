"use client";

import { motion } from "framer-motion";
import { Code, Laptop, Brain, Database, Cloud, Wrench } from "lucide-react";

export default function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code className="w-6 h-6" />,
            skills: ["Java", "Python", "C", "C#", "C++", "JavaScript", "TypeScript", "PHP"],
        },
        {
            title: "Frameworks & Web",
            icon: <Laptop className="w-6 h-6" />,
            skills: ["Spring Boot", "React", "React Native", "Flutter", "Node.js", "Express.js", ".NET", "HTML/CSS"],
        },
        {
            title: "AI & Data Science",
            icon: <Brain className="w-6 h-6" />,
            skills: ["Machine Learning", "Deep Learning", "Data Mining", "Big Data (Spark)", "Power BI"],
        },
        {
            title: "Databases",
            icon: <Database className="w-6 h-6" />,
            skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "SQLite"],
        },
        {
            title: "DevOps & Cloud",
            icon: <Cloud className="w-6 h-6" />,
            skills: ["Docker", "Kubernetes", "GitLab Pipeline", "Microsoft Azure", "Git"],
        },
        {
            title: "Other Technologies",
            icon: <Wrench className="w-6 h-6" />,
            skills: ["REST API", "WebSocket", "ERP", "OOP", "Agile"],
        },
    ];

    return (
        <section id="skills" className="relative py-32 px-4 bg-background/50">
            <div className="container max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-purple text-sm font-semibold uppercase tracking-wider">Technical Expertise</span>
                    <h2 className="text-5xl font-bold mt-4">Skills & Technologies</h2>
                    <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, scalable applications
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-6 hover:scale-105 transition-transform"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-accent-blue">{category.icon}</div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm px-3 py-1 bg-white/5 rounded-lg border border-white/10 hover:bg-accent-blue/20 hover:border-accent-blue/50 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
