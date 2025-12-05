"use client";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import { BentoGrid, BentoCard } from "@/components/home/BentoGrid";
import Experience from "@/components/home/Experience";
import Certifications from "@/components/home/Certifications";
import Contact from "@/components/home/Contact";
import { Code, Layers, Zap, Globe, Cpu, Database } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Home() {
  const items = [
    {
      title: "Hotel IT Infrastructure Monitoring Platform",
      description: "Centralized monitoring platform for hotel IT infrastructure management. Features manager dashboard for financial tracking, IT staff workspace with dynamic alerts, and integrated AI for predictive analysis.",
      image: "/project-vigon.png",
      icon: <Layers className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSocket", "AI"],
    },
    {
      title: "IT Asset Management System",
      description: "Full-stack application for IT equipment inventory and tracking management. Enables asset addition, assignment, history tracking, and automated alerts.",
      image: "/project-ramsys.png",
      icon: <Database className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
      tags: ["React.js", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Pharmacy Management System",
      description: "Platform facilitating interaction between pharmacists and suppliers. Stock management with customizable alerts for quantities and expiration dates, featuring integrated AI.",
      image: "/project-pharmacy.png",
      icon: <Cpu className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
      tags: ["React", "Spring Boot", "PostgreSQL", "AI"],
    },
    {
      title: "Real-Time Transport Management",
      description: "RESTful API developed with Spring Boot for processing transport data including schedules, GPS positions, and delays. Integration with real-time data sources for accurate tracking.",
      image: "/project-transport.png",
      icon: <Globe className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
      tags: ["React", "Spring Boot", "MySQL", "REST API"],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      <About />

      <Skills />

      <section id="work" className="w-full py-20 px-4 bg-background">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent-purple text-sm font-semibold uppercase tracking-wider">Portfolio</span>
            <h2 className="text-5xl font-bold mt-4">Featured Projects</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
              Real-world applications showcasing my technical capabilities and problem-solving skills
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass rounded-2xl overflow-hidden border border-white/10 hover:shadow-2xl hover:shadow-accent-blue/20 transition-all duration-300"
              >
                {/* Project Image */}
                {item.image && (
                  <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-left hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-accent-blue mt-1">{item.icon}</div>
                    <h3 className="font-bold text-2xl leading-tight flex-1">{item.title}</h3>
                  </div>

                  <p className="text-foreground/70 mb-4 leading-relaxed">{item.description}</p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 hover:bg-accent-blue/20 hover:border-accent-blue/50 transition-colors font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Experience />

      <Certifications />

      <Contact />

      <footer className="w-full py-10 text-center text-white/40 text-sm pb-32 bg-background/50">
        <p>© 2025 Mohamed Amine ADNANE. All rights reserved.</p>
        <p className="mt-2">Software Engineering Student | Marrakech, Morocco</p>
      </footer>
    </main>
  );
}
