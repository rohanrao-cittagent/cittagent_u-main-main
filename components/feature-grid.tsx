"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Activity, Zap, Server, BarChart3, Radio } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
const features = [
    {
        title: "IoT Services",
        description: "Non-intrusive sensor deployment on legacy equipment. Real-time data streaming from Anest Iwata compressors, CNC machines, and assembly lines.",
        icon: Radio,
    },
    {
        title: "Predictive Maintenance",
        description: "AI-driven anomaly detection prevents downtime before it happens.",
        icon: Activity,
    },
    {
        title: "Energy Monitoring",
        description: "Real-time tracking of kilowatt consumption per machine cycle.",
        icon: Zap,
    },
    {
        title: "Data Analytics",
        description: "Cloud-powered analytics dashboard for multi-site operational visibility and OEE optimization.",
        icon: BarChart3,
    },
];

export function FeatureGrid() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section id="features" className="py-24 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        FactoryOps <span className="text-primary">Intelligence</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A unified platform to connect, analyze, and optimize every aspect of your production line.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            className="h-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card
                                className={`h-full bg-card/50 border-border/50 backdrop-blur hover:border-primary/50 transition-all hover:shadow-[0_0_30px_-5px_var(--color-primary)] group overflow-hidden relative text-center cursor-pointer ${expandedIndex === i ? 'ring-2 ring-primary/50' : ''}`}
                                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <CardHeader>
                                    <motion.div layout>
                                        <feature.icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </CardTitle>
                                    </motion.div>
                                </CardHeader>
                                <CardContent>
                                    <AnimatePresence mode="wait">
                                        {expandedIndex === i ? (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, height: "auto", scale: 1 }}
                                                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            >
                                                <CardDescription className="text-sm px-4 pb-2 text-wrap">
                                                    {feature.description}
                                                </CardDescription>
                                            </motion.div>
                                        ) : (
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="text-xs text-muted-foreground/50 mt-2 animate-pulse"
                                            >
                                                Click to learn more
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
