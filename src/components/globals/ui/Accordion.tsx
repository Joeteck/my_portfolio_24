import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const Accordion = ({ title, children, isOpen, onClick }: AccordionProps) => {
  return (
    <div className="accordion">
      {/* Header */}
      <button onClick={onClick} className="accordion-header">
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {/* Content (Visible when expanded) */}
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
