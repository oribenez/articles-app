import { FC } from "react";
import { TextInputProps } from "./types";


const TextInput: FC<TextInputProps> = ({
    type,
    placeholder,
    name,
    label,
    register,
    helperText,
    valueAsNumber,
}) => (
    <>
        {label && <label htmlFor={name}>{label}</label>}
        <input
            id={name}
            type={type}
            placeholder={placeholder}
            {...register?.(name, { valueAsNumber })}
        />
        {helperText && <span className="error-message">{helperText as any}</span>}
    </>
);
export default TextInput;