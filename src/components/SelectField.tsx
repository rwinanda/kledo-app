import { useState } from "react";

export interface Option {
    id: number;
    name: string;
}

interface SelectFieldProps {
    label: string;
    value: string;
    onChange: (item: Option | undefined) => void;
    options: Option[];
    placeholder: string;
    disabled: boolean;
}

const SelectField = ({ label, value, onChange, options, placeholder, disabled }: SelectFieldProps) => {
    const [focused, setFocused] = useState(false);

    return (
        <div>
            <p>
                {label}
            </p>
            <select
                value={value}
                onChange={(e) => onChange(options.find((option) => option.id === Number(e.target.value)))}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                disabled={disabled}
                className={`w-full h-10 border-2 rounded-xl px-4 justify-center
                    ${disabled
                        ? "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"
                        : focused
                            ? "border-gray-900 shadow-[0_0_0_4px_rgba(17,24,39,0.06)] cursor-pointer"
                            : value
                                ? "border-gray-200 text-gray-900 font-medium cursor-pointer hover:border-gray-300"
                                : "border-gray-200 text-gray-400 cursor-pointer hover:border-gray-300"
                    }`}
            >
                <option value="">{placeholder}</option>
                {
                    options.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectField;