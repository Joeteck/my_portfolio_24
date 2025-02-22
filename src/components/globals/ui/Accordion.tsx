import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Icon for expand/collapse

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className="accordion">
      {/* Header */}
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="accordion-header"
        >
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>

      {/* Content (Visible when expanded) */}
        {isOpen && (
        <div className="accordion-content">
            {children}
        </div>
        )}
    </div>
    );
};

export default Accordion;
