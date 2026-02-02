"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";


export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 bg-black/40 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
            <div className="relative flex items-center">
                {/* Placeholder to reserve horizontal space */}
                <div className="w-[180px] md:w-[280px] h-1" aria-hidden="true"></div>

                {/* Absolutely positioned logo allowing overflow */}
                <Image
                    src="/logo.png"
                    alt="Cittagent Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="absolute top-1/2 left-0 -translate-y-1/2 mt-3 md:mt-4 w-auto h-[140px] md:h-[200px] object-contain max-w-none z-50"
                />
            </div>

            <div className="hidden md:flex items-center justify-center gap-16 flex-1">
                {["Features", "Technology", "Solutions", "About"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                    >
                        <motion.span
                            className="block text-sm font-medium text-white/70 hover:text-primary transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item}
                        </motion.span>
                    </Link>
                ))}
            </div>


            {/* Desktop Placeholder for balance */}
            <div className="hidden md:block w-[280px] h-1" aria-hidden="true"></div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-white/90 hover:text-white p-2 z-50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col items-center gap-8 py-10">
                            {["Features", "Technology", "Solutions", "About"].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-xl font-medium text-white/80 hover:text-white transition-colors">
                                        {item}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>
    );
}
