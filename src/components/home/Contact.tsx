"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
    const contacts = [
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email",
            value: "mohamedamine.adnane@emsi-edu.ma",
            href: "mailto:mohamedamine.adnane@emsi-edu.ma",
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Phone",
            value: "+212 764 158 014",
            href: "tel:+212764158014",
        },
        {
            icon: <Linkedin className="w-8 h-8" />,
            title: "LinkedIn",
            value: "Mohamed Amine Adnane",
            href: "https://www.linkedin.com/in/mohamed-amine-adnane-57097038a/",
        },
        {
            icon: <Github className="w-8 h-8" />,
            title: "GitHub",
            value: "@amiopp",
            href: "https://github.com/amiopp",
        },
    ];

    return (
        <section id="contact" className="relative py-32 px-4 bg-background">
            <div className="container max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-blue text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
                    <h2 className="text-5xl font-bold mt-4">Let's Work Together</h2>
                    <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
                        Currently seeking an end-of-studies internship (PFE) for 2026. Open to collaboration and opportunities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contacts.map((contact, idx) => (
                        <motion.a
                            key={idx}
                            href={contact.href}
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-8 text-center hover:scale-105 transition-transform group"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple mb-4 group-hover:scale-110 transition-transform">
                                {contact.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                            <p className="text-sm text-foreground/70 group-hover:text-accent-blue transition-colors break-words">
                                {contact.value}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
