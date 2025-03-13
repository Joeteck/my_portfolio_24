import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitch from "../ui/ThemeSwitch";
import Button from "../ui/Button";

interface NavbarProps {
    type: "company" | "portfolio";
}

const navLinks = {
    company: ["About", "Services", "Projects", "Contact"],
    portfolio: ["About", "Blog", "Projects", "Contact"],
};

export const Navbar = ({ type }: NavbarProps) => {
    const [theme, setTheme] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const savedTheme =
            localStorage.getItem("theme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const links = navLinks[type];

    return (
        <nav className={cn("sticky top-0 z-50 backdrop-blur-xl bg-opacity-90 p-4")}> 
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-xl font-bold">{type === "company" ? "Joeteck" : "Portfolio"}</div>

                <ul className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <li key={link} className="hover:text-gray-400 transition-colors">
                            {link}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <Button className="hidden md:block">Action</Button>
                    <button 
                        className={cn("md:hidden p-2 rounded-full transition-colors", isOpen ? "" : "border border-gray-400")}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className="md:hidden flex flex-col gap-4 mt-4 p-4 bg-white dark:bg-gray-900 rounded-xl fixed top-16 left-0 w-full z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {links.map((link) => (
                            <li key={link} className="hover:text-gray-400 transition-colors">
                                {link}
                            </li>
                        ))}
                        <ThemeSwitch setTheme={setTheme} theme={theme} />
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
};
