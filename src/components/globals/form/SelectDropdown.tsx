type SelectDropdownProps = {
    options: string[];
    value: string;
    onChange: (value: string) => void;
};

const SelectDropdown = ({ options, value, onChange }: SelectDropdownProps) => {
    return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="select">
        {options.map((option, index) => (
        <option key={index} value={option}>
            {option}
        </option>
        ))}
    </select>
    );
};

export default SelectDropdown;
