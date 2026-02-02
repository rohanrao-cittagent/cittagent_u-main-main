import Image from "next/image";
import { Activity, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border/50 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Cittagent"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-auto h-[100px] md:h-[140px] object-contain"
                            />
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 -mt-8">
                            CA Site, 1, HAL 3rd Stage EXTN,<br />
                            behind Hotel Leela Palace, HAL 2nd Stage,<br />
                            Kodihalli, Bengaluru, Karnataka 560008
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div className="col-span-1 text-center pt-16">
                        <h3 className="font-semibold mb-2">Platform</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground">FactoryOps</a></li>
                            <li><a href="#" className="hover:text-foreground">Energy Monitor</a></li>
                            <li><a href="#" className="hover:text-foreground">Predictive Maintenance</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 text-center pt-16">
                        <h3 className="font-semibold mb-2">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground">About Us</a></li>
                            <li><a href="#" className="hover:text-foreground">Careers</a></li>
                            <li><a href="#" className="hover:text-foreground">Blog</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 text-center pt-16">
                        <h3 className="font-semibold mb-2">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>info@cittagent.com</li>
                            <li>+91 90087 63311</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center text-sm text-muted-foreground border-t border-border/30 pt-8">
                    © {new Date().getFullYear()} Cittagent Technologies. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
