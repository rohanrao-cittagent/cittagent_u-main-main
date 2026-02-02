"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 bg-black/40 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
            <div className="relative flex items-center">
                {/* Placeholder to reserve horizontal space */}
                <div className="w-[180px] md:w-[450px] h-1" aria-hidden="true"></div>

                {/* Absolutely positioned logo allowing overflow */}
                <Image
                    src="/logo.png"
                    alt="Cittagent Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="absolute top-1/2 left-0 -translate-y-1/2 mt-3 md:mt-4 w-auto h-[100px] md:h-[200px] object-contain max-w-none z-50"
                />
            </div>

            <div className="hidden md:flex items-center gap-8">
                {["Features", "Technology", "Solutions", "About"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium text-white/70 hover:text-primary transition-colors hover:glow-sm"
                    >
                        {item}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 px-2 md:px-4">
                    Login
                </Button>
                <Button className="font-semibold px-4 md:px-6 shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_30px_-5px_var(--color-primary)] transition-all duration-300">
                    Sign Up
                </Button>
            </div>
        </nav>
    );
}
