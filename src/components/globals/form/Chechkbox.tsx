import { cn } from "@/utils/cn";
import { FiCheck } from "react-icons/fi"; // Import the check icon

type CheckboxProps = {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
    return (
        <label className={cn("flex items-center gap-2 cursor-pointer")}>
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            className="hidden"
        />
        <div
            className={cn(
            "w-5 h-5 flex items-center justify-center rounded-md border-2 border-gray-300 transition-all duration-300",
            checked && "bg-primary border-primary text-white"
            )}
        >
            {checked && <FiCheck className="text-md" />} {/* Show check icon when checked */}
        </div>
        {label && <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>}
        </label>
    );
};

export default Checkbox;
