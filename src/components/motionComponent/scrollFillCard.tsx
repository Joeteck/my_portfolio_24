import { useEffect, useRef, useState } from "react";

export default function ScrollFillCard() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [fill, setFill] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how much of the component is visible in the viewport
        const visible = Math.min(windowHeight, Math.max(0, windowHeight - rect.top));
        const percentVisible = Math.min(100, (visible / rect.height) * 100);

        setFill(percentVisible);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
        ref={ref}
        className="relative w-28 h-full rounded-3xl bg-neutral-900 overflow-hidden mx-auto"
        >
        <div
            className="absolute bottom-0 left-0 w-full bg-yellow-400 transition-all duration-100 ease-out"
            style={{ height: `${fill}%` }}
        />
        </div>
    );
}
