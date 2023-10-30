import React from "react";

export default function SelectForm({ label, name, value, onChange, placeholder, required, disabled, className, error, options }) {
    return (
        <div className={"w-full flex flex-col justify-start items-start gap-1"}>
            <label className={"text-sm font-semibold text-gray-500 dark:text-zinc-400"}>{label}</label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={"w-full h-10 px-2 rounded-md dark:bg-[#111827] dark:text-zinc-100 border-[1px] dark:border-zinc-500 bg-amber-50 text-gray-900 " + className}
            >
                <option value={""}>Seleccione una opci&oacute;n</option>
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
            <span className={"text-sm font-semibold text-red-500"}>{error}</span>
        </div>
    );
}
