"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 bg-black/40 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
            <div className="relative flex items-center">
                {/* Placeholder to reserve horizontal space */}
                <div className="w-[220px] md:w-[450px] h-1" aria-hidden="true"></div>

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

            <div className="hidden md:flex items-center justify-around flex-1">
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


            {/* Placeholder for balance */}
            <div className="w-[220px] md:w-[450px] h-1" aria-hidden="true"></div>

        </nav>
    );
}
