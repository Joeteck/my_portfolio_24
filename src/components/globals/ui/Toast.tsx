"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa"

export type ToastType = "success" | "error"

type ToastProps = {
    type: ToastType
    title: string
    message?: string
    /** Time in ms before the toast closes itself. Default 5000. */
    duration?: number
    onClose: () => void
}

const VARIANTS = {
    success: {
        Icon: FaCheckCircle,
        iconClass: "text-[#1BBB8B]",
        barClass: "bg-[#1BBB8B]",
        role: "status" as const,
    },
    error: {
        Icon: FaExclamationCircle,
        iconClass: "text-red-500",
        barClass: "bg-red-500",
        role: "alert" as const,
    },
}

export const Toast = ({
    type,
    title,
    message,
    duration = 5000,
    onClose,
}: ToastProps) => {
    const { Icon, iconClass, barClass, role } = VARIANTS[type]

    const [visible, setVisible] = useState(false)
    const [paused, setPaused] = useState(false)

    const barRef = useRef<HTMLDivElement>(null)
    const remaining = useRef(duration)
    const closing = useRef(false)
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const onCloseRef = useRef(onClose)

    useEffect(() => {
        onCloseRef.current = onClose
    }, [onClose])

    // Slide in after mount
    useEffect(() => {
        const raf = requestAnimationFrame(() => setVisible(true))
        return () => cancelAnimationFrame(raf)
    }, [])

    // Clear the pending close timer if the toast is replaced or unmounted
    useEffect(() => {
        return () => {
            if (closeTimer.current) clearTimeout(closeTimer.current)
        }
    }, [])

    const dismiss = useCallback(() => {
        if (closing.current) return
        closing.current = true
        setVisible(false)
        // wait for the exit transition before removing from the tree
        closeTimer.current = setTimeout(() => onCloseRef.current(), 300)
    }, [])

    // Countdown + progress bar. Pauses on hover/focus so the message can be read.
    useEffect(() => {
        if (paused) return

        let raf = 0
        let last = performance.now()

        const tick = (now: number) => {
            remaining.current -= now - last
            last = now

            if (barRef.current) {
                const ratio = Math.max(remaining.current / duration, 0)
                barRef.current.style.transform = `scaleX(${ratio})`
            }

            if (remaining.current <= 0) {
                dismiss()
                return
            }
            raf = requestAnimationFrame(tick)
        }

        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [paused, duration, dismiss])

    return (
        <div className="pointer-events-none fixed inset-x-4 top-4 z-50 flex justify-center sm:inset-x-auto sm:right-6 sm:top-6 sm:justify-end">
            <div
                role={role}
                aria-live={type === "error" ? "assertive" : "polite"}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                className={`pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-xl border border-black/5 bg-white text-primaryDark shadow-xl transition duration-300 ease-out motion-reduce:transition-none dark:border-white/10 dark:bg-[#0b1a15] dark:text-primaryLight ${
                    visible
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-3 opacity-0"
                }`}
            >
                <div className="flex items-start gap-3 p-4 pb-5">
                    <Icon
                        className={`mt-0.5 shrink-0 text-xl ${iconClass}`}
                        aria-hidden="true"
                    />

                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold">{title}</p>
                        {message && (
                            <p className="mt-0.5 text-sm opacity-80">
                                {message}
                            </p>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={dismiss}
                        aria-label="Dismiss notification"
                        className="-mr-1 -mt-1 shrink-0 rounded-full p-1.5 opacity-60 transition hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1BBB8B]"
                    >
                        <FaTimes className="text-sm" />
                    </button>
                </div>

                {/* Time remaining */}
                <div
                    ref={barRef}
                    className={`absolute bottom-0 left-0 h-1 w-full origin-left ${barClass}`}
                />
            </div>
        </div>
    )
}

export default Toast