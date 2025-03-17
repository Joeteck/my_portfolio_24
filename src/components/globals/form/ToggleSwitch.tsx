type ToggleSwitchProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
};

const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => {
    return (
    <div
        className={`toggle-switch ${checked ? "bg-primary" : "bg-gray-300"}`}
        onClick={() => onChange(!checked)}
    >
        <div
        className={`switch-circle ${checked ? "translate-x-full" : "translate-x-0"}`}
        />
    </div>
    );
};

export default ToggleSwitch;
