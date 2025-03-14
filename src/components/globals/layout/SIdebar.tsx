import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitch from "../ui/ThemeSwitch";

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    links: { name: string; path: string }[];
}

const Sidebar = ({ isOpen, setIsOpen, links }: SidebarProps) => {
    const menuRef = useRef<HTMLUListElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <AnimatePresence>
        {isOpen && (
            <motion.ul
            ref={menuRef}
            className="md:hidden flex flex-col gap-6 mt-0 p-4 bg-white dark:bg-gray-900 fixed top-14 left-0 w-40 z-50 cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            >
            {links.map((link) => (
                <li
                key={link.name}
                className="hover:text-gray-400 transition-colors text-sm font-extralight"
                onClick={() => setIsOpen(false)}
                >
                {link.name}
                </li>
            ))}
                <ThemeSwitch/>
            </motion.ul>
        )}
        </AnimatePresence>
    );
};

export default Sidebar;
