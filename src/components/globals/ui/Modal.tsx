"use client";

import { cn } from "@/utils/cn";
import { useEffect, useState, isValidElement, cloneElement, ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Info,
    CheckCircle,
    AlertTriangle,
    XCircle,
    HelpCircle,
    X,
} from "lucide-react";
import Button from "./Button";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    trigger?: ReactElement<any>; // ✅ Properly typed
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

export default function Modal({
    isOpen: controlledOpen,
    onClose,
    trigger,
    variant = "info",
    title,
    children,
    className,
    }: ModalProps) {
    const [isOpen, setIsOpen] = useState(controlledOpen ?? false);

    // Open modal handler
    const handleTriggerClick = () => {
        setIsOpen(true);
    };

    // Close modal handler
    const handleClose = () => {
        setIsOpen(false);
        onClose?.(); // also call external onClose if provided
    };

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

    return (
        <>
        {/* Trigger Button (if provided) */}
        {trigger &&
            isValidElement(trigger) &&
            cloneElement(trigger as ReactElement<{ onClick?: (e: any) => void }>, {
            onClick: (e: any) => {
                handleTriggerClick();
                (trigger.props as { onClick?: (e: any) => void })?.onClick?.(e); // merge existing onClick if present
            },
            })}

        {/* Modal */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
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
                <Button className="absolute top-4 right-4" onClick={handleClose}>
                    <X size={20} />
                </Button>

                {/* Modal Header */}
                {title && (
                    <div className="modal-header flex items-center gap-2 mb-4">
                        {variant in ICONS ? ICONS[variant as keyof typeof ICONS] : null}
                        <h2 className="text-lg font-semibold">{title}</h2>
                    </div>
                )}

                {/* Modal Content */}
                <div className="modal-content">{children}</div>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}
