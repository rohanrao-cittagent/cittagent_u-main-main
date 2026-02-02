"use client";

import { motion } from "framer-motion";
import {
    TimerOff,
    BarChart4,
    Factory,
    BrainCircuit,
    BellRing,
    RotateCw,
    Zap,
    Activity,
    LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    delay: number;
}

const insights = [
    {
        title: "Downtime",
        description: "Identify utility-related and compressor-driven downtime causes and reduce unplanned stoppages.",
        icon: TimerOff,
        color: "text-red-500",
    },
    {
        title: "OEE Analysis",
        description: "Enhance equipment OEE with energy and utility context for better performance tracking.",
        icon: BarChart4,
        color: "text-blue-500",
    },
    {
        title: "Production",
        description: "Ensure stable production by monitoring utility readiness and air system performance.",
        icon: Factory,
        color: "text-amber-500",
    },
    {
        title: "AI Anomaly Detection",
        description: "Detect abnormal energy, pressure and operating behaviour in real time automatically.",
        icon: BrainCircuit,
        color: "text-purple-500",
    },
    {
        title: "Alerts & Reports",
        description: "Get real-time, role-based alerts with clear operational recommendations.",
        icon: BellRing,
        color: "text-rose-500",
    },
    {
        title: "Cycles & Patterns",
        description: "Track compressor load, unload and idle cycles to optimise operations.",
        icon: RotateCw,
        color: "text-green-500",
    },
    {
        title: "Energy Intelligence",
        description: "Measure and optimise energy efficiency across your compressed air systems.",
        icon: Zap,
        color: "text-yellow-500",
    },
    {
        title: "Condition Monitoring",
        description: "Continuously monitor operating conditions to protect equipment and performance.",
        icon: Activity,
        color: "text-cyan-500",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function InsightsGrid() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Real-time insights for <span className="text-primary">every machine</span>
                        </h2>
                        <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
                            Comprehensive monitoring and analysis system designed to optimize your entire production ecosystem through data-driven intelligence.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {insights.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className="group h-full"
                        >
                            <div className="h-full relative p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:bg-card/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden">
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full items-center text-center">
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110",
                                        "bg-background border border-border/50 shadow-sm"
                                    )}>
                                        <feature.icon className={cn("w-6 h-6", feature.color)} />
                                    </div>

                                    <h3 className="text-lg font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/90 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
