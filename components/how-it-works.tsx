"use client";

import { motion } from "framer-motion";
import { Plug, BrainCircuit, LineChart } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Connect",
        description: "Install non-intrusive sensors on your machinery in under 15 minutes. Plug-and-play compatibility with 99% of legacy equipment.",
        icon: Plug,
    },
    {
        id: 2,
        title: "Analyze",
        description: "Data streams securely to the cloud where AI models analyze frequencies, power consumption, and vibration patterns in real-time.",
        icon: BrainCircuit,
    },
    {
        id: 3,
        title: "Optimize",
        description: "Receive instant alerts on downtime risks and OEE bottlenecks via dashboard or mobile app. Take action before failure occurs.",
        icon: LineChart,
    },
];

export function HowItWorks() {
    return (
        <section id="technology" className="py-24 bg-background border-t border-border/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        From Anest Iwata Compressors to Assembly Lines—<br />
                        <span className="text-secondary">We Monitor It All</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Deployment is simple. Our hardware-agnostic platform gets you live data without stopping your production line.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Connector Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 shadow-[0_0_15px_var(--color-primary)] hidden md:block"></div>

                                <div className="flex-1 text-center md:text-left">
                                    <div className={`p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur hover:bg-card/50 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                        <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2 justify-center md:justify-start">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-extrabold mr-2">
                                                {step.id}
                                            </span>
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-1 flex justify-center">
                                    <motion.div
                                        className="relative w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20"
                                        animate={{
                                            boxShadow: [
                                                "0 0 30px -5px var(--color-secondary)",
                                                "0 0 50px 0px var(--color-secondary)",
                                                "0 0 30px -5px var(--color-secondary)"
                                            ]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <step.icon className="w-10 h-10" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
