"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";



const reviews = [
    {
        role: "Plant Maintenance Manager – Automotive Factory",
        quote: "The energy intelligence dashboard helped us identify continuous air leaks that were previously invisible. After implementing the recommendations, we reduced idle compressor running by 18-22% and improved overall system stability."
    },
    {
        role: "Energy Manager – Food Processing Plant",
        quote: "The system clearly showed how over-pressure and poor load control were increasing our energy cost. The root-cause classification helped us prioritise corrective actions and achieve an estimated 12-15% reduction in compressed air energy consumption."
    },
    {
        role: "Operations Head – Metal Fabrication Facility",
        quote: "Instead of only seeing monthly energy reports, we now get real-time operational insights on compressor efficiency, leaks and abnormal power usage. This helped us justify maintenance interventions and realise 8-10% measurable energy savings within the first quarter."
    },
    {
        role: "Plant Engineering Manager – Electronics Assembly Facility",
        quote: "The system provided a clear separation between equipment inefficiency and operational misuse. This helped our engineering team address root causes instead of repeatedly reacting to high energy bills."
    },
    {
        role: "Reliability Engineer – Heavy Engineering Plant",
        quote: "By correlating power, pressure and load patterns, the platform highlighted early signs of performance degradation in one of our compressors. This allowed us to plan maintenance before a breakdown and avoid unplanned downtime."
    }
];

export function SocialProof() {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 border-y border-border/40 bg-background/50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Customer Reviews Section */}

                {/* Customer Reviews Section */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                    Customer <span className="text-blue-500">Review</span>
                </h2>
                <div className="relative min-h-[300px] flex flex-col items-center justify-center max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentReview}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center px-4"
                        >
                            <h2 className="text-lg md:text-2xl font-normal italic text-muted-foreground leading-relaxed mb-8">
                                "{reviews[currentReview].quote}"
                            </h2>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-1 bg-primary/50 mb-4 rounded-full" />
                                <p className="text-xl font-semibold tracking-wide">{reviews[currentReview].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress Indicators */}
                    <div className="flex gap-3 mt-12 pb-4">
                        {reviews.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentReview(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentReview ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                                    }`}
                                aria-label={`Go to review ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
