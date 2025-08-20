type TextareaProps = {
    id?: string
    name?: string
    placeholder?: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    className?: string
    rows?: number
    required?: boolean
}

const Textarea = ({
    id,
    name,
    placeholder,
    value,
    onChange,
    className = "",
    rows = 3,
    required = false,
    }: TextareaProps) => {
    return (
        <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`rounded-md p-2 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm focus:ring-2 focus:ring-[#1BBB8B] focus:outline-none w-full ${className}`}
        />
    )
}

export default Textarea
