"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

import { LivePulse } from "@/components/live-pulse";

const words = [
    { text: "Factory Floor.", color: "text-blue-500" },
    { text: "Production Line.", color: "text-amber-500" },
    { text: "Energy Usage.", color: "text-emerald-500" },
    { text: "Machine Health.", color: "text-purple-500" },
];

export function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
                <div className="absolute right-10 bottom-10 -z-10 h-[200px] w-[200px] rounded-full bg-secondary/20 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-xl"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        Live Factory Intelligence
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-5xl"
                    >
                        Real-Time Intelligence for the <br className="hidden md:block" />
                        <span className={`relative inline-block min-w-[300px] transition-colors duration-300 ${words[index].color}`}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[index].text}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="block"
                                >
                                    {words[index].text}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
                    >
                        Transform your manufacturing operations with Cittagent's IoT solutions. Monitor energy, predict downtime, and optimize OEE in minutes.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center gap-4 pt-4"
                    >
                        <Button size="lg" className="h-12 px-8 text-lg font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all rounded-full">
                            Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full border-primary/50 text-foreground hover:bg-primary/10">
                            <PlayCircle className="mr-2 h-5 w-5" /> See How It Works
                        </Button>
                    </motion.div>
                </div>

                {/* Abstract Dashboard/Pulse Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="mt-16 relative rounded-xl border border-border/50 bg-background/50 backdrop-blur shadow-2xl overflow-hidden aspect-[16/9] max-w-5xl mx-auto"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none z-10"></div>

                    {/* Live Pulse Component */}
                    <LivePulse />
                </motion.div>
            </div>
        </section>
    );
}
