import { FC } from "react";
import { SelectProps } from "./types";



const Select: FC<SelectProps> = ({
    name,
    label,
    register,
    error,
    children
}) => (
    <>
        {label && <label htmlFor={name}>{label}</label>}
        <select id={name} {...register(name as any)}>
            {children}
        </select>
        {error && <span className="error-message">{error.message}</span>}
    </>
);
export default Select;