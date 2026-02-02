"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const slides = [
    {
        headline: <>Cut Industrial Energy Waste in Real-Time.<br />Improve Uptime.<br />Reduce Operating Cost.</>,
        description: "Cittagent’s Digital Energy Supervisor continuously monitors your compressors and utilities, detects hidden energy losses, predicts failures, and delivers actionable insights to operators and maintenance teams.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
        headline: <>Predict Machine Failures<br />Before They Happen.</>,
        description: "Avoid costly downtime with AI-driven predictive analytics. Monitor vibration, temperature, and acoustics to detect anomalies early and schedule maintenance only when needed.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
        headline: <>Optimize Production Flow<br />with Real-Time Visibility.</>,
        description: "Get a digital twin of your factory floor. Track OEE, identify bottlenecks, and streamline operations for maximum throughput and efficiency.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    }
];

export function CaseStudies() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-[2.5rem] overflow-hidden min-h-[500px] bg-black text-white shadow-2xl flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 z-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/60 z-10" />
                            <div
                                className="absolute inset-0 opacity-60 bg-cover bg-center transition-all duration-1000"
                                style={{ backgroundImage: `url('${slides[currentIndex].image}')` }}
                            />
                        </motion.div>
                    </AnimatePresence>

                    <div className="relative z-20 w-full h-full p-8 md:p-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full w-full"
                            >
                                {/* Left Column: Headline + CTAs */}
                                <div className="flex flex-col justify-center space-y-8">
                                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
                                        {slides[currentIndex].headline}
                                    </h2>

                                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                        <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-black hover:bg-white/90 shadow-xl transition-all rounded-full w-full sm:w-auto">
                                            Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/50 text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto">
                                            <PlayCircle className="mr-2 h-5 w-5" /> See How It Works
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Column: Description */}
                                <div className="flex flex-col justify-center space-y-6 lg:pl-12 border-l border-white/10">
                                    <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
                                        {slides[currentIndex].description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-30">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 transition-all duration-300 rounded-full ${idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
