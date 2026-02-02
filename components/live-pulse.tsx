"use client";

import { motion } from "framer-motion";

export function LivePulse() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-transparent relative overflow-hidden">
            {/* Grid Background specifically for this chart area to make it look technical */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]"></div>

            {/* Container for the line */}
            <div className="relative w-full h-32 flex items-center">
                {/* The glowing line */}
                <svg
                    viewBox="0 0 1200 100"
                    className="w-full h-full drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0,50 L200,50 L220,20 L240,80 L260,50 L400,50 L420,10 L440,90 L460,50 L600,50 L620,30 L640,70 L660,50 L800,50 L820,15 L840,85 L860,50 L1000,50 L1020,35 L1040,65 L1060,50 L1200,50"
                        fill="none"
                        stroke="var(--color-primary)" // Using CSS variable for electric blue
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: 1,
                            strokeDashoffset: [0, -200] // Simulate movement slightly
                        }}
                        transition={{
                            pathLength: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 },
                            opacity: { duration: 0.5 },
                            strokeDashoffset: { duration: 2, ease: "linear", repeat: Infinity }
                        }}
                    />

                    {/* Second line closely following for a "ghost" effect or just a second data stream */}
                    <motion.path
                        d="M0,60 L180,60 L200,80 L220,40 L240,60 L420,60 L440,90 L460,30 L480,60 L620,60 L640,75 L660,45 L680,60 L1200,60"
                        fill="none"
                        stroke="var(--color-secondary)" // Neon Green
                        strokeWidth="2"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 2.5,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    />
                </svg>

                {/* Scanline effect */}
                <motion.div
                    className="absolute top-0 bottom-0 w-[2px] bg-white/50 shadow-[0_0_20px_2px_rgba(255,255,255,0.5)]"
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                />
            </div>

            <div className="absolute bottom-4 right-4 flex flex-col items-end text-xs font-mono text-primary/80">
                <span>LIVE DATA STREAM // 142.5 Hz</span>
                <span className="text-secondary/80">ENERGY EFF: 98.2%</span>
            </div>
        </div>
    );
}
