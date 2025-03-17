import { useState } from "react";
import { cn } from "@/utils/cn";
import { EyeOff, Eye } from "lucide-react";

type TextInputProps = {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
    showToggle?: boolean;
};

const TextInput = ({
    placeholder,
    value,
    onChange,
    type = "text",
    showToggle = false,
}: TextInputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPasswordType = type === "password";

    const handleToggle = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="relative w-full">
        <input
            type={isPasswordType && showToggle && showPassword ? "text" : type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="input w-full p-2 border rounded-md"
        />
        {isPasswordType && showToggle && (
            <button
            type="button"
            onClick={handleToggle}
            className={cn(
                "absolute right-2 top-1/2 transform -translate-y-1/2 text-[8px] md:text-[10px] text-gray-500"
            )}
            >
            {showPassword ? <EyeOff/> : <Eye/> }
            </button>
        )}
        </div>
    );
};

export default TextInput;
