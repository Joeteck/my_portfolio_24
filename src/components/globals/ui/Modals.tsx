"use client";

import { cn } from "@/utils/cn";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Info, CheckCircle, AlertTriangle, XCircle, HelpCircle, X } from "lucide-react";
import Button from "./Button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    variant?: "info" | "success" | "warning" | "error" | "confirm" | "form";
    title?: string;
    children?: React.ReactNode;
    className?: string;
}

const ICONS = {
    info: <Info className="modal-icon text-blue-500" />,
    success: <CheckCircle className="modal-icon text-green-500" />,
    warning: <AlertTriangle className="modal-icon text-yellow-500" />,
    error: <XCircle className="modal-icon text-red-500" />,
    confirm: <HelpCircle className="modal-icon text-purple-500" />,
};

export default function Modal({ isOpen, onClose, variant = "info", title, children, className }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className={cn(
                        "modal-container p-6 relative rounded-xl shadow-lg w-full max-w-lg",
                        variant && `modal-${variant}`,
                        className
                    )}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Button className="btn btn-outline" onClick={onClose}>
                        <X size={20} />
                    </Button>

                    {/* Modal Header */}
                    {title && (
                        <div className="modal-header">
                            {variant in ICONS ? ICONS[variant as keyof typeof ICONS] : null} {/* Fallback to null if no icon */}
                            <h2>{title}</h2>
                        </div>
                    )}


                    {/* Modal Content */}
                    <div className="modal-content">{children}</div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
