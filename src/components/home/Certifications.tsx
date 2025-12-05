"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Certifications() {
    const certs = [
        {
            title: "Software Engineering: Design & Project Management",
            issuer: "Coursera",
            description: "Software project management and architecture",
            link: "https://www.coursera.org/account/accomplishments/verify/A9WMYDUECF48",
        },
        {
            title: "Virtual Networks in Azure",
            issuer: "Microsoft Azure",
            description: "Virtual networking",
            link: "https://www.coursera.org/account/accomplishments/verify/EY2IK3R9YR8S",
        },
        {
            title: "Introduction to Containers",
            issuer: "Coursera",
            description: "Docker, Kubernetes & OpenShift",
            link: "https://www.coursera.org/account/accomplishments/verify/MG3LPQI2786F",
        },
        {
            title: "React Basics",
            issuer: "Coursera",
            description: "React.js fundamentals and best practices",
            link: "https://www.coursera.org/account/accomplishments/verify/0NDVDUF289UQ",
        },
        {
            title: "Interactivity with JavaScript",
            issuer: "Coursera",
            description: "Interactive and dynamic JavaScript",
            link: "https://www.coursera.org/account/accomplishments/verify/9VQ4Q6Q2K8RA",
        },
        {
            title: "Introduction to Java and Object-Oriented Programming",
            issuer: "University of Pennsylvania",
            description: "Java OOP fundamentals",
            link: "https://www.coursera.org/account/accomplishments/verify/FRGL4CJ3RKUS",
        },
        {
            title: "The Arduino Platform and C Programming",
            issuer: "University of California, Irvine",
            description: "Embedded systems",
            link: "https://www.coursera.org/account/accomplishments/verify/LLTDMA7YFLJT",
        },
        {
            title: "HTML, CSS, and Javascript for Web Developers",
            issuer: "Johns Hopkins University",
            description: "Web development fundamentals",
            link: "https://www.coursera.org/account/accomplishments/verify/PMUGNW56YFQE",
        },
    ];

    return (
        <section id="certifications" className="relative py-32 px-4 bg-background/50">
            <div className="container max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-purple text-sm font-semibold uppercase tracking-wider">Continuous Learning</span>
                    <h2 className="text-5xl font-bold mt-4">Professional Certifications</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certs.map((cert, idx) => (
                        <motion.a
                            key={idx}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-6 hover:scale-105 transition-transform group"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg group-hover:text-accent-blue transition-colors">{cert.title}</h3>
                                </div>
                                <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-accent-blue transition-colors" />
                            </div>
                            <p className="text-sm text-foreground/70 mb-1">{cert.description}</p>
                            <p className="text-xs text-accent-purple">{cert.issuer}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
