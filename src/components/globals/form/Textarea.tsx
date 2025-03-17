type TextareaProps = {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
};

const Textarea = ({ placeholder, value, onChange }: TextareaProps) => {
    return (
    <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="textarea text-md font-light"
        rows={3}
    />
    );
};

export default Textarea;
